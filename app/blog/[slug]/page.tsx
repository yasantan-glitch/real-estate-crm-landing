import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | ${siteConfig.productName}`,
    description: post.excerpt,
    openGraph: {
      images: [
        {
          url: `${siteConfig.siteUrl}/og-default.png`,
          width: 1200,
          height: 630,
          alt: siteConfig.productName,
        },
      ],
    },
  };
}

/** "2026-08-02" -> "2 Ağustos 2026" (parsed as local calendar date, not UTC, to avoid off-by-one day shifts). */
function formatDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: siteConfig.companyName },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/logos/EmlakCRM-Logo.png`,
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

              <span className="mt-6 inline-flex items-center rounded-full bg-accent-tint px-3 py-1 text-xs font-bold text-accent">
                {formatDate(post.date)}
              </span>

              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand md:text-4xl">
                {post.title}
              </h1>

              <div
                className="prose-post mt-8 text-[15.5px] leading-relaxed text-slate-700 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-brand [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-brand [&_li]:mt-2 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
