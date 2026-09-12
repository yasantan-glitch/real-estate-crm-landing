import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoForm from "@/components/DemoForm";
import { siteConfig } from "@/config/site";
import { demoPage } from "@/content/landing";

const canonicalUrl = `${siteConfig.siteUrl}/demo-talep`;

export const metadata: Metadata = {
  title: demoPage.seo.title,
  description: demoPage.seo.description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: demoPage.seo.title,
    description: demoPage.seo.description,
    url: canonicalUrl,
    siteName: siteConfig.productName,
  },
};

export default function DemoRequestPage() {
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
                {demoPage.eyebrow}
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand md:text-5xl">
                {demoPage.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{demoPage.intro}</p>
            </div>
          </div>
        </section>

        {/* --- Process sections --- */}
        <section className="border-y border-line bg-surface">
          <div className="section">
            <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
              {demoPage.sections.map((item) => (
                <div key={item.title} className="rounded-2xl border border-line bg-white p-[22px]">
                  <h2 className="text-[15.5px] font-bold text-brand">{item.title}</h2>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Demo form --- */}
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
