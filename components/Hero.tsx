import LedgerStrip from "./LedgerStrip";
import { hero, heroLedger, ledgerLabels } from "@/content/landing";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="section !py-14 md:!py-20">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="max-w-3xl lg:col-span-7 lg:max-w-none">
            <p className="eyebrow items-start">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {hero.eyebrow}
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-brand sm:text-5xl md:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              {hero.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#demo" className="btn-primary">
                {hero.ctaPrimary}
              </a>
              <a href="#paketler" className="btn-secondary">
                {hero.ctaSecondary}
              </a>
            </div>
            <p className="mt-6 max-w-md text-sm text-slate-500">{hero.trustNote}</p>
          </div>

          <div className="mt-12 md:mt-16 lg:col-span-5 lg:mt-0">
            <LedgerStrip rows={heroLedger.rows} variant="light" caption={heroLedger.tableCaption} labels={ledgerLabels} />
          </div>
        </div>
      </div>
    </section>
  );
}
