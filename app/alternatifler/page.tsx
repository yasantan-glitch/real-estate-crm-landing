import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { alternativesHubPage, alternatives } from "@/content/alternatives";

const canonicalUrl = `${siteConfig.siteUrl}/alternatifler`;

export const metadata: Metadata = {
  title: alternativesHubPage.seo.title,
  description: alternativesHubPage.seo.description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: alternativesHubPage.seo.title,
    description: alternativesHubPage.seo.description,
    url: canonicalUrl,
    siteName: siteConfig.productName,
  },
};

export default function AlternativesHubPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white">
          <div className="section !pb-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">
                {alternativesHubPage.eyebrow}
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand md:text-5xl">
                {alternativesHubPage.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{alternativesHubPage.intro}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-surface">
          <div className="section">
            <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
              {alternatives.map((item) => (
                <a
                  key={item.slug}
                  href={`/alternatifler/${item.slug}`}
                  className="rounded-[18px] border border-line bg-white p-6 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-accent"
                >
                  <h2 className="text-[16.5px] font-bold text-brand">{item.eyebrow}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.intro}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-accent">Karşılaştırmayı gör →</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
