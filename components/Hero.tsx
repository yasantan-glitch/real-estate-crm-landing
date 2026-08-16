import LedgerStrip from "./LedgerStrip";
import { hero, heroLedger, ledgerLabels } from "@/content/landing";

const HEADLINE_HIGHLIGHT = "tek panelde";

export default function Hero() {
  const [headlineBefore, headlineAfter] = hero.headline.split(HEADLINE_HIGHLIGHT);

  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-tint opacity-60 blur-3xl"
        aria-hidden="true"
      />
      <div className="section !py-14 md:!py-20 relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-bold uppercase tracking-[0.06em] text-white">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {hero.eyebrow}
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-brand sm:text-6xl md:text-[72px]">
              {headlineAfter === undefined ? (
                hero.headline
              ) : (
                <>
                  {headlineBefore}
                  <span className="text-accent">{HEADLINE_HIGHLIGHT}</span>
                  {headlineAfter}
                </>
              )}
            </h1>
            <h2 className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              {hero.subheadline}
            </h2>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <a href="#demo" className="btn-primary gap-2">
                {hero.ctaPrimary} <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#paketler" className="btn-secondary">
                {hero.ctaSecondary}
              </a>
            </div>
            <p className="mt-6 max-w-md text-[13.5px] text-slate-500">{hero.trustNote}</p>
          </div>

          <div>
            <LedgerStrip rows={heroLedger.rows} variant="light" caption={heroLedger.tableCaption} labels={ledgerLabels} />
          </div>
        </div>
      </div>
    </section>
  );
}
