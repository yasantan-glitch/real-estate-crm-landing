import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProductPreviewSection from "@/components/ProductPreviewSection";
import PipelineSection from "@/components/PipelineSection";
import FeaturesSection from "@/components/FeaturesSection";
import AudienceSection from "@/components/AudienceSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import ReferencesSection from "@/components/ReferencesSection";
import DemoForm from "@/components/DemoForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ProductPreviewSection />
        <PipelineSection />
        <FeaturesSection />
        <AudienceSection />
        <PricingSection />
        <ServicesSection />
        <TrustSection />
        <ReferencesSection />
        <DemoForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
