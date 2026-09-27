import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryPageTemplate from "@/components/gallery/GalleryPageTemplate";
import { siteConfig } from "@/config/site";
import { galleryPage } from "@/content/gallery-page";

const canonicalUrl = `${siteConfig.siteUrl}/basari-hikayesi`;

export const metadata: Metadata = {
  title: galleryPage.seo.title,
  description: galleryPage.seo.description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: galleryPage.seo.title,
    description: galleryPage.seo.description,
    url: canonicalUrl,
    siteName: siteConfig.productName,
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <GalleryPageTemplate />
      <Footer />
    </>
  );
}
