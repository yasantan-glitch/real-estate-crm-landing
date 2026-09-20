import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReferencesSection from "@/components/ReferencesSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProductPreviewSection from "@/components/ProductPreviewSection";
import ProductGallerySection from "@/components/ProductGallerySection";
import AudienceSection from "@/components/AudienceSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import DemoForm from "@/components/DemoForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MobileStickyCtaBar from "@/components/MobileStickyCtaBar";
import { faq } from "@/content/landing";
import { buildFaqJsonLd } from "@/lib/jsonld";

const faqJsonLd = buildFaqJsonLd(faq.items);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main id="main-content">
        <Hero />
        <ReferencesSection />
        <ProblemSection />
        <SolutionSection />
        <ProductPreviewSection />
        <ProductGallerySection />
        <AudienceSection />
        <PricingSection />
        <ServicesSection />
        <TrustSection />
        <DemoForm />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyCtaBar />
    </>
  );
}
