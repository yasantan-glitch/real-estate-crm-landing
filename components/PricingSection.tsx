import SectionHeading from "./SectionHeading";
import { pricing } from "@/content/landing";
import { stagger } from "@/lib/motion";

export default function PricingSection() {
  return (
    <section id="paketler" className="scroll-mt-24 bg-brand">
      <div className="section !pb-[110px]">
        <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} intro={pricing.note} dark center />
        <div className="mt-14 grid items-start gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]" {...stagger("settle")}>
          {pricing.tiers.map((tier) => {
            const featured = Boolean(tier.badge);
            return (
              <div
                key={tier.name}
                className={`relative rounded-[24px] border p-8 ${
                  featured
                    ? "scale-[1.04] border-accent bg-gradient-to-br from-accent to-accent-hover shadow-accent-glow-lg"
                    : "border-t-2 border-t-accent/30 border-x-zinc-800 border-b-zinc-800 bg-brand-soft shadow-flat-dark"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-white">
                    {tier.badge}
                  </div>
                )}
                <p className={`text-[13px] font-bold ${featured ? "text-white/95" : "text-zinc-400"}`}>{tier.target}</p>
                <h3 className="mb-[18px] mt-1.5 text-[22px] font-extrabold text-white">{tier.name}</h3>
                {tier.customQuoteNote && (
                  <p className={`mb-5 text-[12.5px] ${featured ? "text-white/75" : "text-zinc-400"}`}>
                    {tier.customQuoteNote}
                  </p>
                )}
                <a
                  href={`${pricing.ctaHref}?${pricing.ctaParam}=${encodeURIComponent(tier.name)}`}
                  className={`mb-5 block rounded-full py-3.5 text-center text-[15px] font-bold ${
                    featured ? "bg-brand text-white" : "bg-accent text-white"
                  }`}
                >
                  {pricing.cta}
                </a>
                <div className={`mb-5 h-px ${featured ? "bg-white/25" : "bg-zinc-800"}`} />
                <ul className="flex flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span
                        className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${
                          featured ? "bg-white/20" : "bg-zinc-700"
                        }`}
                        aria-hidden="true"
                      >
                        <svg width="7" height="6" viewBox="0 0 7 6" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M0.7 3l1.8 1.8L6.3 1" />
                        </svg>
                      </span>
                      <span className={`text-sm leading-tight ${featured ? "text-white/95" : "text-zinc-300"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
