import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UseCasePageTemplate from "@/components/use-cases/UseCasePageTemplate";
import { siteConfig } from "@/config/site";
import { useCases } from "@/content/use-cases";
import { buildFaqJsonLd } from "@/lib/jsonld";

const content = useCases.find((item) => item.slug === "emlak-ofisi")!;

const canonicalUrl = `${siteConfig.siteUrl}/kimler-icin/${content.slug}`;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    url: canonicalUrl,
    siteName: siteConfig.productName,
  },
};

const faqJsonLd = buildFaqJsonLd(content.faq);

export default function EmlakOfisiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <UseCasePageTemplate content={content} />
      <Footer />
    </>
  );
}
