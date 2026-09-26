import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import BlogPostGrid from "@/components/BlogPostGrid";
import BlogCategoryPills from "@/components/BlogCategoryPills";
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
              reveal={false}
            />

            <BlogCategoryPills />

            <BlogPostGrid
              posts={posts}
              emptyMessage="Henüz yayınlanmış bir yazı yok. Yakında burada olacak."
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
