import SectionHeading from "./SectionHeading";
import { trust } from "@/content/landing";

export default function TrustSection() {
  return (
    <section className="bg-white">
      <div className="section">
        <SectionHeading eyebrow={trust.eyebrow} title={trust.title} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {trust.items.map((item) => (
            <div key={item.title} className="rounded-xl border-l-4 border-accent bg-surface p-6">
              <h3 className="font-display text-base font-semibold text-brand">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
