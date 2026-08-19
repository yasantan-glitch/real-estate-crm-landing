import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";
import { pricingPage, pricing, services } from "@/content/landing";

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

export default function PricingPage() {
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
            <div className="mt-12 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
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

        {/* --- Comparison table --- */}
        <section className="bg-white">
          <div className="section">
            <SectionHeading
              eyebrow={pricingPage.comparison.eyebrow}
              title={pricingPage.comparison.title}
              center
            />
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr>
                    <th className="w-1/4 border-b border-line pb-4 pr-4 text-[13px] font-bold uppercase tracking-[0.06em] text-muted">
                      &nbsp;
                    </th>
                    {pricing.tiers.map((tier) => (
                      <th key={tier.name} className="border-b border-line px-4 pb-4 text-brand">
                        <span className="text-[17px] font-extrabold">{tier.name}</span>
                        {tier.badge && (
                          <span className="mt-1 block text-[12px] font-bold text-accent">{tier.badge}</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-line py-4 pr-4 text-[13.5px] font-bold text-brand">
                      {pricingPage.comparison.launchPriceLabel}
                    </td>
                    {pricing.tiers.map((tier) => (
                      <td key={tier.name} className="border-b border-line px-4 py-4 text-[17px] font-extrabold text-brand">
                        {tier.price.discountedPrice}
                      </td>
                    ))}
                  </tr>
                  {pricingPage.comparison.rowLabels.map((label, rowIndex) => (
                    <tr key={label}>
                      <td className="border-b border-line py-4 pr-4 text-[13.5px] font-bold text-brand">{label}</td>
                      {pricing.tiers.map((tier) => (
                        <td
                          key={tier.name}
                          className="border-b border-line px-4 py-4 text-[14px] leading-relaxed text-slate-600"
                        >
                          {tier.features[rowIndex] ?? "—"}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="py-4 pr-4 text-[13.5px] font-bold text-brand">Ek avantajlar</td>
                    {pricing.tiers.map((tier) => (
                      <td key={tier.name} className="px-4 py-4 text-[14px] leading-relaxed text-slate-600">
                        {tier.features.length > pricingPage.comparison.rowLabels.length ? (
                          <ul className="flex flex-col gap-1.5">
                            {tier.features.slice(pricingPage.comparison.rowLabels.length).map((f) => (
                              <li key={f}>{f}</li>
                            ))}
                          </ul>
                        ) : (
                          "—"
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            {pricing.tiers.some((t) => t.price.customQuoteNote) && (
              <p className="mt-6 text-center text-[13px] text-slate-500">
                {pricing.tiers.find((t) => t.price.customQuoteNote)?.price.customQuoteNote}
              </p>
            )}
            <div className="mt-10 text-center">
              <a href={pricingPage.cta.href} className="btn-primary">
                {pricing.cta}
              </a>
            </div>
          </div>
        </section>

        {/* --- Additional services --- */}
        <section className="border-t border-line bg-surface">
          <div className="section">
            <SectionHeading eyebrow={services.eyebrow} title={services.title} intro={services.intro} center />
            <div className="mt-14 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
              {services.items.map((item) => (
                <div key={item.title} className="rounded-2xl border border-line bg-white p-[22px]">
                  <h3 className="text-[15px] font-bold text-brand">{item.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">{item.text}</p>
                  <p className="mt-3 inline-block rounded-full bg-accent-tint px-3 py-1 text-xs font-bold text-accent">
                    {pricingPage.services.quoteNote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Pricing FAQ --- */}
        <section className="bg-white">
          <div className="mx-auto w-full max-w-[720px] px-5 py-16 sm:px-8 md:py-20">
            <h2 className="h2 text-center">{pricingPage.faq.title}</h2>
            <div className="mt-10 divide-y divide-line">
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
            <h2 className="h2 !text-white">{pricingPage.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">{pricingPage.cta.text}</p>
            <div className="mt-8">
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
