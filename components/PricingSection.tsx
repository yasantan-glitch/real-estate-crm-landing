import SectionHeading from "./SectionHeading";
import { pricing } from "@/content/landing";

export default function PricingSection() {
  return (
    <section id="paketler" className="scroll-mt-16 bg-surface">
      <div className="section">
        <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} intro={pricing.note} />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricing.tiers.map((tier) => {
            const highlighted = Boolean(tier.badge);
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-7 ${
                  highlighted ? "border-accent shadow-card ring-1 ring-accent" : "border-slate-200"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white">
                    {tier.badge}
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-brand">{tier.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{tier.target}</p>
                <p className="mt-4 font-display text-base font-semibold text-brand">{tier.price}</p>
                <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg className="mt-0.5 shrink-0 text-accent" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#demo" className={`${highlighted ? "btn-primary" : "btn-dark"} mt-7 w-full`}>
                  {pricing.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
