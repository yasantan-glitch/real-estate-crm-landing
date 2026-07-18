import SectionHeading from "./SectionHeading";
import { trust } from "@/content/landing";

export default function TrustSection() {
  return (
    <section className="bg-white">
      <div className="section">
        <SectionHeading eyebrow={trust.eyebrow} title={trust.title} />
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {trust.items.map((item) => (
            <div key={item.title} className="border-t border-slate-200 pt-5">
              <h3 className="text-base font-semibold text-brand">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
