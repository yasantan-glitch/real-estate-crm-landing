import SectionHeading from "./SectionHeading";
import { solution } from "@/content/landing";

export default function SolutionSection() {
  return (
    <section className="bg-brand">
      <div className="section">
        <SectionHeading eyebrow={solution.eyebrow} title={solution.title} intro={solution.intro} dark />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solution.items.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-700/60 bg-brand-soft/50 p-5">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent text-white" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
