/**
 * Optional add-on services — deliberately quieter than the CRM product
 * sections: a simple bordered card grid that reads as an appendix.
 */
import SectionHeading from "./SectionHeading";
import { services } from "@/content/landing";

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="scroll-mt-24 bg-white">
      <div className="section">
        <SectionHeading eyebrow={services.eyebrow} title={services.title} intro={services.intro} center />
        <div className="mt-14 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
          {services.items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-surface p-[22px]">
              <h3 className="text-[15px] font-bold text-brand">{item.title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
