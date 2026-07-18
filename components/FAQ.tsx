import SectionHeading from "./SectionHeading";
import { faq } from "@/content/landing";

export default function FAQ() {
  return (
    <section id="sss" className="scroll-mt-16 bg-surface">
      <div className="section">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {faq.items.map((item) => (
            <details key={item.q} className="group rounded-xl border border-slate-200 bg-white p-5 open:shadow-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm font-semibold text-brand [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg className="shrink-0 text-accent transition-transform group-open:rotate-45" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
