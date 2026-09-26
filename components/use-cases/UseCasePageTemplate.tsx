import type { UseCasePageContent } from "@/content/use-cases";
import { toolsPageBackLinkKimlerIcin } from "@/content/use-cases";
import { reveal, stagger } from "@/lib/motion";

export default function UseCasePageTemplate({ content }: { content: UseCasePageContent }) {
  return (
    <main>
      {/* --- Intro --- */}
      <section className="bg-white">
        <div className="section !pb-10">
          <div className="mx-auto max-w-2xl text-center">
            <a href={toolsPageBackLinkKimlerIcin.href} className="text-sm font-semibold text-accent">
              {toolsPageBackLinkKimlerIcin.label}
            </a>
            <p className="mt-4 eyebrow justify-center">
              {content.eyebrow}
            </p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand md:text-5xl">
              {content.h1}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{content.intro}</p>
          </div>
        </div>
      </section>

      {/* --- Pain points --- */}
      <section className="border-y border-line bg-surface">
        <div className="section">
          <h2 className="h2 text-center" {...reveal("mask")}>Karşılaştığınız Zorluklar</h2>
          <div className="mt-10 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]" {...stagger("settle")}>
            {content.painPoints.map((item) => (
              <div key={item.title} className="rounded-[18px] border border-line bg-white p-6">
                <h3 className="text-[16.5px] font-bold text-brand">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Relevant features --- */}
      <section className="bg-white">
        <div className="section">
          <h2 className="h2 text-center" {...reveal("mask")}>Size Özel Özellikler</h2>
          <div className="mt-10 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]" {...stagger("settle")}>
            {content.relevantFeatures.map((item) => (
              <div
                key={item.title}
                className="rounded-[18px] border border-line p-6 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-accent"
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
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto w-full max-w-[720px] px-5 py-16 sm:px-8 md:py-20">
          <h2 className="h2 text-center" {...reveal("mask")}>Sık Sorulan Sorular</h2>
          <div className="mt-10 divide-y divide-line" {...stagger("fade")}>
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
        </div>
      </section>

      {/* --- Closing CTA --- */}
      <section className="border-t border-line bg-brand">
        <div className="section text-center">
          <h2 className="h2 !text-white" {...reveal("mask")}>{content.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400" {...reveal("up")}>{content.cta.text}</p>
          <div className="mt-8" {...reveal("settle")}>
            <a href={content.cta.href} className="btn-primary">
              {content.cta.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
