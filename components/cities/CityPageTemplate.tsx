import type { CityPageContent } from "@/content/cities";

export default function CityPageTemplate({ content }: { content: CityPageContent }) {
  return (
    <main>
      {/* --- Intro --- */}
      <section className="bg-white">
        <div className="section !pb-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">
              {content.eyebrow}
            </p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand md:text-5xl">
              {content.h1}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{content.intro}</p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {content.districts.map((district) => (
                <span
                  key={district}
                  className="rounded-full bg-accent-tint px-3 py-1 text-xs font-bold text-accent"
                >
                  {district}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Market context (city-specific) --- */}
      <section className="border-y border-line bg-surface">
        <div className="section">
          <h2 className="h2 text-center">{content.marketContext.title}</h2>
          <div className="mt-10 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            {content.marketContext.items.map((item) => (
              <div key={item.title} className="rounded-[18px] border border-line bg-white p-6">
                <h3 className="text-[16.5px] font-bold text-brand">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Pain points --- */}
      <section className="bg-white">
        <div className="section">
          <h2 className="h2 text-center">Karşılaştığınız Zorluklar</h2>
          <div className="mt-10 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            {content.painPoints.map((item) => (
              <div key={item.title} className="rounded-[18px] border border-line bg-surface p-6">
                <h3 className="text-[16.5px] font-bold text-brand">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Relevant features --- */}
      <section className="border-t border-line bg-white">
        <div className="section">
          <h2 className="h2 text-center">Size Özel Özellikler</h2>
          <div className="mt-10 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
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

      {/* --- Related links --- */}
      {content.relatedLinks.length > 0 && (
        <section className="border-t border-line bg-surface">
          <div className="mx-auto w-full max-w-[720px] px-5 py-12 text-center sm:px-8">
            <h2 className="h2">İlgili Kaynaklar</h2>
            <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {content.relatedLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm font-semibold text-accent underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* --- FAQ --- */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto w-full max-w-[720px] px-5 py-16 sm:px-8 md:py-20">
          <h2 className="h2 text-center">Sık Sorulan Sorular</h2>
          <div className="mt-10 divide-y divide-line">
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
          <h2 className="h2 !text-white">{content.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">{content.cta.text}</p>
          <div className="mt-8">
            <a href={content.cta.href} className="btn-primary">
              {content.cta.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
