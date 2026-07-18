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
                className={`flex flex-col border bg-white p-7 ${
                  highlighted
                    ? "order-first border-slate-200 border-t-2 border-t-accent lg:order-none"
                    : "border-slate-200"
                }`}
              >
                {tier.badge && (
                  <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                    {tier.badge}
                  </p>
                )}
                <h3 className="text-xl font-semibold text-brand">{tier.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{tier.target}</p>
                <p className="mt-4 text-sm font-semibold text-brand">{tier.price}</p>
                <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="text-accent" aria-hidden="true">
                        ✓
                      </span>
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
