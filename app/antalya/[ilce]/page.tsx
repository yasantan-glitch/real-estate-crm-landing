import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CityPageTemplate from "@/components/cities/CityPageTemplate";
import { siteConfig } from "@/config/site";
import { antalyaDistricts } from "@/content/antalya-districts";
import { buildFaqJsonLd, buildServiceJsonLd } from "@/lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return antalyaDistricts.map((d) => ({ ilce: d.slug }));
}

type Props = { params: Promise<{ ilce: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ilce } = await params;
  const content = antalyaDistricts.find((d) => d.slug === ilce);
  if (!content) return {};
  const canonicalUrl = `${siteConfig.siteUrl}/antalya/${content.slug}`;
  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: canonicalUrl,
      siteName: siteConfig.productName,
    },
  };
}

export default async function AntalyaDistrictPage({ params }: Props) {
  const { ilce } = await params;
  const content = antalyaDistricts.find((d) => d.slug === ilce);
  if (!content) notFound();

  const faqJsonLd = buildFaqJsonLd(content.faq);
  const serviceJsonLd = buildServiceJsonLd({
    serviceName: `${siteConfig.productName} — ${content.cityName}, Antalya`,
    areaServed: `${content.cityName}, Antalya`,
    description: content.seo.description,
    providerUrl: siteConfig.siteUrl,
    providerName: siteConfig.companyName,
  });

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
