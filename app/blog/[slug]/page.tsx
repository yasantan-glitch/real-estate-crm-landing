import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import BlogPostGrid from "@/components/BlogPostGrid";
import BlogCategoryPills from "@/components/BlogCategoryPills";
import { siteConfig } from "@/config/site";
import {
  BLOG_CATEGORIES,
  formatPostDate,
  getAllPostSlugs,
  getCategoryLabel,
  getPostBySlug,
  getPostsByCategory,
} from "@/lib/blog";

// This route serves two kinds of pages under one dynamic segment, because
// Next.js does not allow sibling dynamic folders with different param names
// (e.g. [slug] and [category]) at the same level: a category slug (one of
// BLOG_CATEGORIES) renders the category listing, anything else is looked up
// as a post slug.

type PageProps = {
  params: Promise<{ slug: string }>;
};

function isCategorySlug(slug: string) {
  return BLOG_CATEGORIES.some((category) => category.slug === slug);
}

export function generateStaticParams() {
  const postParams = getAllPostSlugs().map((slug) => ({ slug }));
  const categoryParams = BLOG_CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
  return [...postParams, ...categoryParams];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (isCategorySlug(slug)) {
    const label = getCategoryLabel(slug);
    const canonicalUrl = `${siteConfig.siteUrl}/blog/${slug}`;

    return {
      title: `${label} | Blog | ${siteConfig.productName}`,
      description: `${label} kategorisindeki emlak CRM, portföy yönetimi ve satış süreçleri yazıları.`,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        url: canonicalUrl,
        siteName: siteConfig.productName,
        images: [
          {
            url: `${siteConfig.siteUrl}/api/og?title=${encodeURIComponent(label)}&type=blog`,
            width: 1200,
            height: 630,
            alt: siteConfig.productName,
          },
        ],
      },
    };
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const canonicalUrl = `${siteConfig.siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | ${siteConfig.productName}`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      url: canonicalUrl,
      images: [
        {
          url: `${siteConfig.siteUrl}/api/og?title=${encodeURIComponent(post.title)}&type=blog`,
          width: 1200,
          height: 630,
          alt: siteConfig.productName,
        },
      ],
    },
  };
}

/** "2026-08-02" -> "2026-08-02T00:00:00+03:00" (string concat, not a Date object, to avoid UTC conversion shifting the day). */
function toIsoDateTime(dateString: string) {
  return `${dateString}T00:00:00+03:00`;
}

function BlogCategoryListing({ categorySlug }: { categorySlug: string }) {
  const label = getCategoryLabel(categorySlug);
  const posts = getPostsByCategory(categorySlug);

  return (
    <>
      <Header />
      <main>
        <section className="bg-white">
          <div className="section">
            <h1 className="mb-6 text-center font-display text-2xl font-extrabold tracking-tight text-brand md:text-3xl">
              {label}
            </h1>
            <SectionHeading
              eyebrow="Blog"
              title={`${label} kategorisindeki yazılar`}
              center
              reveal={false}
            />

            <BlogCategoryPills activeSlug={categorySlug} />

            <BlogPostGrid
              posts={posts}
              emptyMessage="Bu kategoride henüz yayınlanmış bir yazı yok."
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params;

  if (isCategorySlug(slug)) {
    return <BlogCategoryListing categorySlug={slug} />;
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getPostsByCategory(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: `${siteConfig.siteUrl}/api/og?title=${encodeURIComponent(post.title)}&type=blog`,
    datePublished: toIsoDateTime(post.date),
    dateModified: toIsoDateTime(post.date),
    author: {
      "@type": "Person",
      name: siteConfig.companyName,
      url: siteConfig.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/logos/EmlakCRM-Logo.svg`,
      },
    },
    description: post.excerpt,
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <section className="bg-white">
          <div className="section">
            <div className="mx-auto max-w-2xl">
              <Link
                href="/blog"
                className="text-sm font-bold text-accent hover:underline"
              >
                ← Blog&apos;a dön
              </Link>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-accent-tint px-3 py-1 text-xs font-bold text-accent">
                  {formatPostDate(post.date)}
                </span>
                <Link
                  href={`/blog/${post.category}`}
                  className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 hover:bg-slate-200"
                >
                  {getCategoryLabel(post.category)}
                </Link>
              </div>

              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand md:text-4xl">
                {post.title}
              </h1>

              <div
                className="prose-post mt-8 text-[15.5px] leading-relaxed text-slate-700 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-brand [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-brand [&_li]:mt-2 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />

              {relatedPosts.length > 0 && (
                <div className="mt-12 border-t border-line pt-8">
                  <h2 className="font-display text-lg font-bold text-brand">
                    {getCategoryLabel(post.category)} kategorisindeki diğer yazılar
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {relatedPosts.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/blog/${related.slug}`}
                          className="text-sm font-bold text-accent hover:underline"
                        >
                          {related.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
