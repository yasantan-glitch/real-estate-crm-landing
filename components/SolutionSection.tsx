import SectionHeading from "./SectionHeading";
import EditorialSplit from "./EditorialSplit";
import RuleList from "./RuleList";
import { solution } from "@/content/landing";

/**
 * Mirrors ProblemSection's layout (reverse prop) so problem → solution reads
 * as an echo. White surface: PipelineSection right after this is the page's
 * only full-bleed black mid-page moment.
 */
export default function SolutionSection() {
  return (
    <section className="bg-white">
      <div className="section">
        <EditorialSplit
          reverse
          framing={
            <SectionHeading
              eyebrow={solution.eyebrow}
              title={solution.title}
              intro={solution.intro}
            />
          }
          rows={<RuleList items={solution.items} />}
        />
      </div>
    </section>
  );
}
