import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolsTabsSection from "@/components/ToolsTabsSection";
import { siteConfig } from "@/config/site";
import { toolsIndexPage } from "@/content/landing";

const canonicalUrl = `${siteConfig.siteUrl}/araclar`;

export const metadata: Metadata = {
  title: toolsIndexPage.seo.title,
  description: toolsIndexPage.seo.description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: toolsIndexPage.seo.title,
    description: toolsIndexPage.seo.description,
    url: canonicalUrl,
    siteName: siteConfig.productName,
  },
};

const [commissionTool, rentalYieldTool, tapuHarciTool] = toolsIndexPage.tools;

export default function ToolsIndexPage() {
  return (
    <>
      <Header />
      <main>
        {/* --- Intro --- */}
        <section className="bg-white">
          <div className="section !pb-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">
                {toolsIndexPage.eyebrow}
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand md:text-5xl">
                {toolsIndexPage.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {toolsIndexPage.intro}
              </p>
            </div>
          </div>
        </section>

        <ToolsTabsSection
          commissionTool={commissionTool}
          rentalYieldTool={rentalYieldTool}
          tapuHarciTool={tapuHarciTool}
        />
      </main>
      <Footer />
    </>
  );
}
