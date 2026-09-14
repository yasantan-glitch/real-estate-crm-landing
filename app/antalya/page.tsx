import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CityPageTemplate from "@/components/cities/CityPageTemplate";
import { siteConfig } from "@/config/site";
import { cities } from "@/content/cities";
import { buildFaqJsonLd, buildServiceJsonLd } from "@/lib/jsonld";

const content = cities.find((item) => item.slug === "antalya")!;

const canonicalUrl = `${siteConfig.siteUrl}/${content.slug}`;

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

const serviceJsonLd = buildServiceJsonLd({
  serviceName: `${siteConfig.productName} — ${content.cityName}`,
  areaServed: content.cityName,
  description: content.seo.description,
  providerUrl: siteConfig.siteUrl,
  providerName: siteConfig.companyName,
});

export default function AntalyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Header />
      <CityPageTemplate content={content} />
      <Footer />
    </>
  );
}
