import SectionHeading from "./SectionHeading";
import { solution } from "@/content/landing";
import { revealPop, scrub, stagger } from "@/lib/motion";

/**
 * Full-bleed dark section — the page's mid-scroll signature moment and its
 * one scroll peak: the panel opens from a square inset to full bleed as it
 * enters (scroll-linked on desktop, timed elsewhere), then the answers land
 * one by one and each amber marker switches on.
 */
export default function SolutionSection() {
  return (
    <section className="bg-brand" {...scrub("panel")}>
      <div className="section">
        <SectionHeading title={solution.title} intro={solution.intro} dark center />
        <div {...stagger("settle")} className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-zinc-800 bg-zinc-800 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {solution.items.map((item) => (
            <div key={item.title} className="bg-zinc-900 p-7">
              <div className="mb-4 flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-accent" aria-hidden="true" {...revealPop}>
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
