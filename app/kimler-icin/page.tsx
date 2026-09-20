import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { useCasesHubPage, useCases } from "@/content/use-cases";

const canonicalUrl = `${siteConfig.siteUrl}/kimler-icin`;

export const metadata: Metadata = {
  title: useCasesHubPage.seo.title,
  description: useCasesHubPage.seo.description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: useCasesHubPage.seo.title,
    description: useCasesHubPage.seo.description,
    url: canonicalUrl,
    siteName: siteConfig.productName,
  },
};

export default function UseCasesHubPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white">
          <div className="section !pb-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">
                {useCasesHubPage.eyebrow}
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand md:text-5xl">
                {useCasesHubPage.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{useCasesHubPage.intro}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-surface">
          <div className="section">
            <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
              {useCases.map((item) => (
                <a
                  key={item.slug}
                  href={`/kimler-icin/${item.slug}`}
                  className="rounded-[18px] border border-line bg-white p-6 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-accent"
                >
                  <h2 className="text-[16.5px] font-bold text-brand">{item.segmentName}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.intro}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-accent">Detaylı bilgi →</span>
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
