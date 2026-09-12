import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { featuresPage } from "@/content/landing";

const canonicalUrl = `${siteConfig.siteUrl}/ozellikler`;

export const metadata: Metadata = {
  title: featuresPage.seo.title,
  description: featuresPage.seo.description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: featuresPage.seo.title,
    description: featuresPage.seo.description,
    url: canonicalUrl,
    siteName: siteConfig.productName,
  },
};

export default function FeaturesPage() {
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
                {featuresPage.eyebrow}
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand md:text-5xl">
                {featuresPage.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{featuresPage.intro}</p>
            </div>
          </div>
        </section>

        {/* --- Feature sections --- */}
        <section className="border-y border-line bg-surface">
          <div className="section">
            <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
              {featuresPage.sections.map((item) => (
                <div key={item.title} className="rounded-2xl border border-line bg-white p-[22px]">
                  <h2 className="text-[15.5px] font-bold text-brand">{item.title}</h2>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Closing CTA --- */}
        <section className="border-t border-line bg-brand">
          <div className="section text-center">
            <h2 className="h2 !text-white">{featuresPage.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">{featuresPage.cta.text}</p>
            <div className="mt-8">
              <a href={featuresPage.cta.href} className="btn-primary">
                {featuresPage.cta.label}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
