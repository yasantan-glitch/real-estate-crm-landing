import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SuccessStoryPageTemplate from "@/components/success-story/SuccessStoryPageTemplate";
import { siteConfig } from "@/config/site";
import { successStory } from "@/content/success-story";

const canonicalUrl = `${siteConfig.siteUrl}/basari-hikayesi`;

export const metadata: Metadata = {
  title: successStory.seo.title,
  description: successStory.seo.description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: successStory.seo.title,
    description: successStory.seo.description,
    url: canonicalUrl,
    siteName: siteConfig.productName,
  },
};

export default function SuccessStoryPage() {
  return (
    <>
      <Header />
      <SuccessStoryPageTemplate />
      <Footer />
    </>
  );
}
