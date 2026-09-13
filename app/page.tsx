import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReferencesSection from "@/components/ReferencesSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProductPreviewSection from "@/components/ProductPreviewSection";
import AudienceSection from "@/components/AudienceSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import DemoForm from "@/components/DemoForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MobileStickyCtaBar from "@/components/MobileStickyCtaBar";
import { faq } from "@/content/landing";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <ReferencesSection />
        <ProblemSection />
        <SolutionSection />
        <ProductPreviewSection />
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
