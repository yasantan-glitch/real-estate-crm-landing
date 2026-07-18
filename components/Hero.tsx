import { hero } from "@/content/landing";

/**
 * The dashboard mockup is built with plain markup (no screenshots),
 * so it always matches the theme and needs no image assets.
 * Content inside the mockup is illustrative UI, not a product claim.
 */
function DashboardMockup() {
  const kpis = [
    { label: "Aktif Portföy", value: "128" },
    { label: "Açık Talep", value: "47" },
    { label: "Bu Ay Kapanan", value: "9" },
    { label: "Bekleyen Görev", value: "14" },
  ];

  const pipeline = [
    {
      stage: "Yeni Talep",
      cards: [
        { title: "3+1 · Konyaaltı", meta: "Bütçe 8.5M", match: true },
        { title: "2+1 · Kiralık", meta: "Bütçe 45B/ay", match: false },
      ],
    },
    {
      stage: "Yer Gösterme",
      cards: [
        { title: "Villa · Döşemealtı", meta: "Randevu: Salı 14:00", match: false },
      ],
    },
    {
      stage: "Pazarlık",
      cards: [{ title: "Dükkan · Muratpaşa", meta: "Teklif alındı", match: false }],
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-brand p-3 shadow-2xl sm:p-4"
    >
      {/* window chrome */}
      <div className="mb-3 flex items-center gap-1.5 px-1">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="ml-3 hidden rounded-md bg-brand-soft px-3 py-1 text-[10px] text-slate-400 sm:block">
          panel · broker görünümü
        </span>
      </div>

      {/* KPI row */}
      <div className="mb-3 grid grid-cols-4 gap-2">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-lg bg-brand-soft p-2.5 sm:p-3">
            <div className="font-display text-base font-bold text-white sm:text-xl">
              {kpi.value}
            </div>
            <div className="mt-0.5 text-[9px] text-slate-400 sm:text-[10px]">
              {kpi.label}
            </div>
          </div>
        ))}
      </div>

      {/* pipeline columns */}
      <div className="grid grid-cols-3 gap-2">
        {pipeline.map((col) => (
          <div key={col.stage} className="rounded-lg bg-brand-soft/60 p-2">
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-300 sm:text-[10px]">
                {col.stage}
              </span>
              <span className="text-[9px] text-slate-500">{col.cards.length}</span>
            </div>
            <div className="flex flex-col gap-2">
              {col.cards.map((card) => (
                <div key={card.title} className="rounded-md bg-white p-2 shadow-sm">
                  <div className="text-[10px] font-semibold text-brand sm:text-[11px]">
                    {card.title}
                  </div>
                  <div className="mt-0.5 flex items-center justify-between">
                    <span className="text-[9px] text-slate-500">{card.meta}</span>
                    {card.match && (
                      <span className="rounded-full bg-accent/10 px-1.5 py-0.5 text-[8px] font-semibold text-accent">
                        3 eşleşme
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* accent glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="section grid items-center gap-12 !py-14 md:grid-cols-2 md:!py-20">
        <div>
          <p className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-brand sm:text-5xl">
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

        <DashboardMockup />
      </div>
    </section>
  );
}
