import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommissionCalculator from "@/components/CommissionCalculator";
import RentalYieldCalculator from "@/components/RentalYieldCalculator";
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

const [commissionTool, rentalYieldTool] = toolsIndexPage.tools;

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
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
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

        {/* --- Komisyon hesaplama --- */}
        <section className="border-t border-line bg-surface">
          <div className="section">
            <div className="mx-auto max-w-2xl">
              <h2 className="h2 text-center">{commissionTool.title}</h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-[14.5px] leading-relaxed text-slate-600">
                {commissionTool.description}
              </p>
              <div className="mt-8">
                <CommissionCalculator />
              </div>
              <p className="mt-5 text-center text-[14.5px] leading-relaxed text-slate-500">
                <a href={commissionTool.detailHref} className="font-semibold text-accent underline">
                  {commissionTool.detailLabel}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* --- Kira getirisi hesaplama --- */}
        <section className="border-t border-line bg-white">
          <div className="section">
            <div className="mx-auto max-w-2xl">
              <h2 className="h2 text-center">{rentalYieldTool.title}</h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-[14.5px] leading-relaxed text-slate-600">
                {rentalYieldTool.description}
              </p>
              <div className="mt-8">
                <RentalYieldCalculator />
              </div>
              <p className="mt-5 text-center text-[14.5px] leading-relaxed text-slate-500">
                <a href={rentalYieldTool.detailHref} className="font-semibold text-accent underline">
                  {rentalYieldTool.detailLabel}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
