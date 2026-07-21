import SectionHeading from "./SectionHeading";
import { solution } from "@/content/landing";

/** Full-bleed dark section — the page's mid-scroll signature moment. */
export default function SolutionSection() {
  return (
    <section className="bg-brand">
      <div className="section">
        <SectionHeading eyebrow={solution.eyebrow} title={solution.title} intro={solution.intro} dark center />
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-zinc-800 bg-zinc-800 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {solution.items.map((item) => (
            <div key={item.title} className="bg-zinc-900 p-7">
              <div className="mb-4 flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-accent" aria-hidden="true">
                <span className="h-2 w-2 rounded-sm bg-white" />
              </div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
