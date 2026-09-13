import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AlternativePageTemplate from "@/components/alternatives/AlternativePageTemplate";
import { siteConfig } from "@/config/site";
import { alternatives } from "@/content/alternatives";
import { buildFaqJsonLd } from "@/lib/jsonld";

const content = alternatives.find((item) => item.slug === "crmprogrami-alternatifi")!;

const canonicalUrl = `${siteConfig.siteUrl}/alternatifler/${content.slug}`;

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

export default function CrmProgramiAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <AlternativePageTemplate content={content} />
      <Footer />
    </>
  );
}
