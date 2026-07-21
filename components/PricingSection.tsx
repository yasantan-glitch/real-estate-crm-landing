import SectionHeading from "./SectionHeading";
import { pricing } from "@/content/landing";

export default function PricingSection() {
  return (
    <section id="paketler" className="scroll-mt-24 bg-surface">
      <div className="section">
        <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} intro={pricing.note} />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricing.tiers.map((tier) => {
            const highlighted = Boolean(tier.badge);
            return (
              <div
                key={tier.name}
                className={`flex flex-col border p-7 ${
                  highlighted
                    ? "order-first border-accent/30 border-t-2 border-t-accent bg-accent/5 lg:order-none"
                    : "border-slate-200 bg-white"
                }`}
              >
                {/* Badge slot reserved at lg so tier names align across the
                    row even though only the recommended tier carries a badge. */}
                <p
                  className={`text-[11px] font-medium uppercase tracking-[0.14em] text-accent ${
                    tier.badge ? "mb-4 h-4" : "hidden lg:mb-4 lg:block lg:h-4"
                  }`}
                >
                  {tier.badge}
                </p>
                <h3 className="text-xl font-semibold text-brand">{tier.name}</h3>
                <p className="mt-1.5 text-sm text-slate-500">{tier.target}</p>
                <div className="mt-5">
                  <p className="text-sm text-slate-400">
                    <span className="sr-only">Önceki fiyat: </span>
                    <span className="line-through">{tier.price.originalPrice}</span>
                  </p>
                  <p className="mt-1 text-2xl font-bold text-brand">{tier.price.discountedPrice}</p>
                  <p className="mt-1 text-xs text-slate-500">{tier.price.discountNote}</p>
                  {tier.price.customQuoteNote ? (
                    <p className="mt-1.5 text-xs italic text-slate-400">{tier.price.customQuoteNote}</p>
                  ) : null}
                </div>
                <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-slate-200 pt-6">
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
