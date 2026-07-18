import SectionHeading from "./SectionHeading";
import { features } from "@/content/landing";

export default function FeaturesSection() {
  return (
    <section id="ozellikler" className="scroll-mt-16 bg-white">
      <div className="section">
        <SectionHeading eyebrow={features.eyebrow} title={features.title} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.items.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-card">
              <h3 className="font-display text-sm font-semibold text-brand">{item.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
