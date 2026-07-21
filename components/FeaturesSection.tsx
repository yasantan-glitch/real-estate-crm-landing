import SectionHeading from "./SectionHeading";
import { features } from "@/content/landing";

export default function FeaturesSection() {
  return (
    <section id="ozellikler" className="scroll-mt-24 border-y border-line bg-surface">
      <div className="section">
        <SectionHeading eyebrow={features.eyebrow} title={features.title} center />
        <div className="mt-14 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(270px,1fr))]">
          {features.items.map((item) => (
            <div key={item.title} className="flex items-start gap-3.5 rounded-2xl border border-line bg-white p-[22px]">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-tint" aria-hidden="true">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M1 4l2.8 2.8L9 1" />
                </svg>
              </span>
              <div>
                <h3 className="text-[15px] font-bold text-brand">{item.title}</h3>
                <p className="mt-1 text-[13.5px] leading-relaxed text-slate-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
