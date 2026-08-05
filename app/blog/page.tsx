import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";
import { blogPage } from "@/content/landing";
import { getAllPosts } from "@/lib/blog";

const blogCanonicalUrl = `${siteConfig.siteUrl}/blog`;

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.productName}`,
  description:
    "Emlak ofisleri için CRM, portföy yönetimi ve satış süreçleri üzerine yazılar.",
  alternates: {
    canonical: blogCanonicalUrl,
  },
  openGraph: {
    url: blogCanonicalUrl,
    siteName: siteConfig.productName,
    images: [
      {
        url: `${siteConfig.siteUrl}/api/og?title=${encodeURIComponent("Blog")}&type=blog`,
        width: 1200,
        height: 630,
        alt: siteConfig.productName,
      },
    ],
  },
};

/** "2026-08-02" -> "2 Ağustos 2026" (parsed as local calendar date, not UTC, to avoid off-by-one day shifts). */
function formatDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main>
        <section className="bg-white">
          <div className="section">
            <h1 className="mb-6 text-center font-display text-2xl font-extrabold tracking-tight text-brand md:text-3xl">
              {blogPage.title}
            </h1>
            <SectionHeading
              eyebrow="Blog"
              title="Emlak CRM ve portföy yönetimi üzerine yazılar"
              center
            />

            {posts.length === 0 ? (
              <p className="mt-14 text-center text-sm text-slate-600">
                Henüz yayınlanmış bir yazı yok. Yakında burada olacak.
              </p>
            ) : (
              <div className="mt-14 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-2xl border border-line bg-white p-6 shadow-card transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-pop"
                  >
                    <span className="inline-flex items-center rounded-full bg-accent-tint px-3 py-1 text-xs font-bold text-accent">
                      {formatDate(post.date)}
                    </span>
                    <h2 className="mt-3 text-[16.5px] font-bold text-brand transition-colors group-hover:text-accent">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
