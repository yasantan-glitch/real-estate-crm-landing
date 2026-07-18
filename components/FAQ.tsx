import SectionHeading from "./SectionHeading";
import { faq } from "@/content/landing";

export default function FAQ() {
  return (
    <section id="sss" className="scroll-mt-16 bg-surface">
      <div className="section">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
        <div className="mt-10 divide-y divide-slate-200 border-t border-slate-200">
          {faq.items.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-brand [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg
                  className="shrink-0 text-accent transition-transform group-open:rotate-45"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
