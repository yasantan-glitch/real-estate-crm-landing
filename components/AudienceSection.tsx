import SectionHeading from "./SectionHeading";
import { audience } from "@/content/landing";

export default function AudienceSection() {
  return (
    <section id="kimler-icin" className="scroll-mt-16 bg-surface">
      <div className="section">
        <SectionHeading eyebrow={audience.eyebrow} title={audience.title} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audience.items.map((item) => (
            <div key={item.title} className="card !p-5">
              <h3 className="font-display text-base font-semibold text-brand">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
