import SectionHeading from "./SectionHeading";
import { trust } from "@/content/landing";

export default function TrustSection() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="section">
        <SectionHeading eyebrow={trust.eyebrow} title={trust.title} center />
        <div className="mt-12 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {trust.items.map((item) => (
            <div key={item.title} className="rounded-[20px] border border-line bg-white p-[30px] shadow-card">
              <h3 className="text-[17px] font-extrabold text-brand">{item.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
