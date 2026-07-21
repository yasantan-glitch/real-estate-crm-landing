import LedgerStrip from "./LedgerStrip";
import { hero, heroLedger, ledgerLabels } from "@/content/landing";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="section !py-14 md:!py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent-tint px-4 py-2 text-xs font-bold uppercase tracking-[0.06em] text-accent">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {hero.eyebrow}
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-brand sm:text-5xl md:text-[52px]">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              {hero.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <a href="#demo" className="btn-primary">
                {hero.ctaPrimary}
              </a>
              <a href="#paketler" className="btn-secondary">
                {hero.ctaSecondary}
              </a>
            </div>
            <p className="mt-6 max-w-md text-[13.5px] text-slate-400">{hero.trustNote}</p>
          </div>

          <div>
            <LedgerStrip rows={heroLedger.rows} variant="light" caption={heroLedger.tableCaption} labels={ledgerLabels} />
          </div>
        </div>
      </div>
    </section>
  );
}
