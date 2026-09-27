import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";
import { pricingPage } from "@/content/landing";
import { useCases } from "@/content/use-cases";
import { buildFaqJsonLd } from "@/lib/jsonld";
import { reveal, stagger } from "@/lib/motion";

const canonicalUrl = `${siteConfig.siteUrl}/fiyatlandirma`;

export const metadata: Metadata = {
  title: pricingPage.seo.title,
  description: pricingPage.seo.description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: pricingPage.seo.title,
    description: pricingPage.seo.description,
    url: canonicalUrl,
    siteName: siteConfig.productName,
  },
};

const faqJsonLd = buildFaqJsonLd(pricingPage.faq.items);

export default function PricingPage() {
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
              <p className="eyebrow justify-center">
                {pricingPage.eyebrow}
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand md:text-5xl">
                {pricingPage.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{pricingPage.intro}</p>
            </div>
          </div>
        </section>

        {/* --- Package guide --- */}
        <section className="border-y border-line bg-surface">
          <div className="section">
            <SectionHeading
              eyebrow={pricingPage.guide.eyebrow}
              title={pricingPage.guide.title}
              center
            />
            <div className="mt-12 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]" {...stagger("settle")}>
              {pricingPage.guide.items.map((item) => (
                <div key={item.officeType} className="rounded-2xl border border-line bg-white p-6">
                  <p className="inline-block rounded-full bg-accent-tint px-3 py-1 text-xs font-bold text-accent">
                    {item.recommendedTier}
                  </p>
                  <h3 className="mt-3 text-[15.5px] font-bold text-brand">{item.officeType}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Pricing cards --- */}
        <PricingSection ctaHref="/#demo" />

        {/* --- Kimler için (segment) blocks --- */}
        {useCases.map((content) => (
          <section key={content.slug} id={content.slug} className="scroll-mt-24 border-t border-line bg-surface">
            <div className="section">
              <div className="mx-auto max-w-2xl text-center">
                <p className="eyebrow justify-center">{content.eyebrow}</p>
                <h2 className="h2 mt-2" {...reveal("mask")}>{content.h1}</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600" {...reveal("up")}>{content.intro}</p>
              </div>

              <div className="mt-12 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]" {...stagger("settle")}>
                {content.painPoints.map((item) => (
                  <div key={item.title} className="rounded-[18px] border border-line bg-white p-6">
                    <h3 className="text-[16.5px] font-bold text-brand">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]" {...stagger("settle")}>
                {content.relevantFeatures.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[18px] border border-line bg-white p-6 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-accent"
                  >
                    <h3 className="text-[16.5px] font-bold text-brand">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                    {item.href && (
                      <a href={item.href} className="mt-3 inline-block text-sm font-semibold text-accent underline">
                        Detaylı bilgi →
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <div className="mx-auto mt-10 max-w-[720px] divide-y divide-line" {...stagger("fade")}>
                {content.faq.map((item) => (
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
                    <p className="mt-3 max-w-[640px] text-[14.5px] leading-relaxed text-slate-600">{item.a}</p>
                  </details>
                ))}
              </div>

              <div className="mt-10 text-center">
                <a href={content.cta.href} className="btn-primary">
                  {content.cta.label}
                </a>
              </div>
            </div>
          </section>
        ))}

        {/* --- Services CTA --- */}
        <section className="border-t border-line bg-surface">
          <div className="section text-center">
            <h2 className="h2" {...reveal("mask")}>{pricingPage.servicesCta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600" {...reveal("up")}>
              {pricingPage.servicesCta.text}
            </p>
            <div className="mt-8" {...reveal("settle")}>
              <a href={pricingPage.servicesCta.href} className="btn-secondary">
                {pricingPage.servicesCta.label}
              </a>
            </div>
          </div>
        </section>

        {/* --- Pricing FAQ --- */}
        <section className="bg-white">
          <div className="mx-auto w-full max-w-[720px] px-5 py-16 sm:px-8 md:py-20">
            <h2 className="h2 text-center" {...reveal("mask")}>{pricingPage.faq.title}</h2>
            <div className="mt-10 divide-y divide-line" {...stagger("fade")}>
              {pricingPage.faq.items.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[15.5px] font-bold text-brand marker:content-none">
                    {item.q}
                    <span
                      className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-surface text-base font-bold text-accent transition-transform duration-200 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[640px] text-[14.5px] leading-relaxed text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* --- Closing CTA --- */}
        <section className="border-t border-line bg-brand">
          <div className="section text-center">
            <h2 className="h2 !text-white" {...reveal("mask")}>{pricingPage.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400" {...reveal("up")}>{pricingPage.cta.text}</p>
            <div className="mt-8" {...reveal("settle")}>
              <a href={pricingPage.cta.href} className="btn-primary">
                {pricingPage.cta.label}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
