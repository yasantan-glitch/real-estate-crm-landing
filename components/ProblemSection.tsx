import SectionHeading from "./SectionHeading";
import { problems } from "@/content/landing";

export default function ProblemSection() {
  return (
    <section className="bg-white">
      <div className="section">
        <SectionHeading eyebrow={problems.eyebrow} title={problems.title} intro={problems.intro} center />
        <div className="mt-14 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {problems.items.map((item) => (
            <div
              key={item.title}
              className="rounded-[18px] border border-line bg-white p-6 shadow-card transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-pop"
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
