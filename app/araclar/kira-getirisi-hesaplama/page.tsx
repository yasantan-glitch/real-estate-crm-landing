import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RentalYieldCalculator from "@/components/RentalYieldCalculator";
import { siteConfig } from "@/config/site";
import { rentalYieldCalculatorPage, toolsPageBackLink } from "@/content/landing";
import { buildFaqJsonLd } from "@/lib/jsonld";

const canonicalUrl = `${siteConfig.siteUrl}/araclar/kira-getirisi-hesaplama`;

export const metadata: Metadata = {
  title: rentalYieldCalculatorPage.seo.title,
  description: rentalYieldCalculatorPage.seo.description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: rentalYieldCalculatorPage.seo.title,
    description: rentalYieldCalculatorPage.seo.description,
    url: canonicalUrl,
    siteName: siteConfig.productName,
  },
};

const faqJsonLd = buildFaqJsonLd(rentalYieldCalculatorPage.faq.items);

export default function RentalYieldCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        {/* --- Intro --- */}
        <section className="bg-white">
          <div className="section !pb-10">
            <div className="mx-auto max-w-2xl text-center">
              <a href={toolsPageBackLink.href} className="text-sm font-semibold text-accent">
                {toolsPageBackLink.label}
              </a>
              <p className="mt-4 eyebrow justify-center">
                {rentalYieldCalculatorPage.eyebrow}
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand md:text-5xl">
                {rentalYieldCalculatorPage.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {rentalYieldCalculatorPage.intro}
              </p>
            </div>
          </div>
        </section>

        {/* --- Calculator --- */}
        <section className="border-y border-line bg-surface">
          <div className="section">
            <div className="mx-auto max-w-2xl">
              <RentalYieldCalculator />
            </div>
          </div>
        </section>

        {/* --- Explanation --- */}
        <section className="bg-white">
          <div className="mx-auto w-full max-w-[720px] px-5 py-16 sm:px-8 md:py-20">
            <h2 className="h2 text-center">{rentalYieldCalculatorPage.explanation.title}</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
              {rentalYieldCalculatorPage.explanation.text}
            </p>
            <p className="mt-5 text-center text-[14.5px] leading-relaxed text-slate-500">
              {rentalYieldCalculatorPage.relatedTool.text}{" "}
              <a href={rentalYieldCalculatorPage.relatedTool.href} className="font-semibold text-accent underline">
                {rentalYieldCalculatorPage.relatedTool.linkLabel}
              </a>
              {rentalYieldCalculatorPage.relatedTool.suffix}
            </p>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="border-t border-line bg-surface">
          <div className="mx-auto w-full max-w-[720px] px-5 py-16 sm:px-8 md:py-20">
            <h2 className="h2 text-center">{rentalYieldCalculatorPage.faq.title}</h2>
            <div className="mt-10 divide-y divide-line">
              {rentalYieldCalculatorPage.faq.items.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[15.5px] font-bold text-brand marker:content-none">
                    {item.q}
                    <span
                      className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-white text-base font-bold text-accent transition-transform duration-200 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[640px] text-[14.5px] leading-relaxed text-slate-600">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* --- Closing CTA --- */}
        <section className="border-t border-line bg-brand">
          <div className="section text-center">
            <h2 className="h2 !text-white">{rentalYieldCalculatorPage.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
              {rentalYieldCalculatorPage.cta.text}
            </p>
            <div className="mt-8">
              <a href={rentalYieldCalculatorPage.cta.href} className="btn-primary">
                {rentalYieldCalculatorPage.cta.label}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
