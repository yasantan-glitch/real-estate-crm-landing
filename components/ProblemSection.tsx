import SectionHeading from "./SectionHeading";
import { problems } from "@/content/landing";

export default function ProblemSection() {
  return (
    <section className="bg-surface">
      <div className="section">
        <SectionHeading eyebrow={problems.eyebrow} title={problems.title} intro={problems.intro} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.items.map((item) => (
            <div key={item.title} className="card !p-5">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent/10 text-accent" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
                </svg>
              </div>
              <h3 className="font-display text-base font-semibold text-brand">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
