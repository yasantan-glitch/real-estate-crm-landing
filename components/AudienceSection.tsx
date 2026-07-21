import SectionHeading from "./SectionHeading";
import { audience } from "@/content/landing";

export default function AudienceSection() {
  return (
    <section id="kimler-icin" className="scroll-mt-24 bg-white">
      <div className="section">
        <SectionHeading eyebrow={audience.eyebrow} title={audience.title} center />
        <div className="mt-14 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {audience.items.map((item) => (
            <div
              key={item.title}
              className="rounded-[18px] border border-line p-6 transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-accent"
            >
              <h3 className="text-[16.5px] font-bold text-brand">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
