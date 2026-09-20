import type { AlternativePageContent } from "@/content/alternatives";
import { toolsPageBackLinkAlternatifler } from "@/content/alternatives";

function renderCell(value: string | boolean) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="font-semibold text-accent">Var</span>
    ) : (
      <span className="text-slate-400">Yok</span>
    );
  }
  return value;
}

export default function AlternativePageTemplate({ content }: { content: AlternativePageContent }) {
  return (
    <main>
      {/* --- Intro --- */}
      <section className="bg-white">
        <div className="section !pb-10">
          <div className="mx-auto max-w-2xl text-center">
            <a href={toolsPageBackLinkAlternatifler.href} className="text-sm font-semibold text-accent">
              {toolsPageBackLinkAlternatifler.label}
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

      {/* --- Comparison table --- */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto w-full max-w-[820px] px-5 py-16 sm:px-8 md:py-20">
          <h2 className="h2 text-center">{content.comparisonTable.title}</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-[14.5px]">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-3 pr-4 font-bold text-brand">Özellik</th>
                  <th className="py-3 pr-4 font-bold text-brand">Emlak CRM Pro</th>
                  <th className="py-3 font-bold text-brand">{content.competitorName}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {content.comparisonTable.rows.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-3 pr-4 font-semibold text-slate-700">{row.feature}</td>
                    <td className="py-3 pr-4 text-slate-600">{renderCell(row.us)}</td>
                    <td className="py-3 text-slate-600">
                      {renderCell(row.competitor)}
                      {row.note && <span className="mt-1 block text-xs text-slate-400">{row.note}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[13px] leading-relaxed text-slate-500">
            {content.comparisonTable.disclaimer} Son doğrulama: {content.lastVerifiedDate}.
          </p>
        </div>
      </section>

      {/* --- Differentiators --- */}
      <section className="bg-white">
        <div className="section">
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            {content.differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-[18px] border border-line p-6 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-accent"
              >
                <h3 className="text-[16.5px] font-bold text-brand">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Who should choose --- */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto w-full max-w-[720px] px-5 py-16 sm:px-8 md:py-20">
          <h2 className="h2 text-center">Hangisi Size Uygun?</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[18px] border border-accent bg-white p-6">
              <h3 className="text-[15.5px] font-bold text-brand">Emlak CRM Pro</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{content.whoShouldChoose.us}</p>
            </div>
            <div className="rounded-[18px] border border-line bg-white p-6">
              <h3 className="text-[15.5px] font-bold text-brand">{content.competitorName}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{content.whoShouldChoose.competitor}</p>
            </div>
          </div>
        </div>
      </section>

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
