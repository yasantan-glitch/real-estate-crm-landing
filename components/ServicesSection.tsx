import SectionHeading from "./SectionHeading";
import { services } from "@/content/landing";

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="scroll-mt-16 bg-white">
      <div className="section">
        <SectionHeading eyebrow={services.eyebrow} title={services.title} intro={services.intro} />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item) => (
            <div key={item.title} className="flex items-start gap-3 rounded-lg border border-slate-200 p-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-brand">{item.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
