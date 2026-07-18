import SectionHeading from "./SectionHeading";
import EditorialSplit from "./EditorialSplit";
import RuleList from "./RuleList";
import { problems } from "@/content/landing";

export default function ProblemSection() {
  return (
    <section className="bg-surface">
      <div className="section">
        <EditorialSplit
          framing={
            <SectionHeading
              eyebrow={problems.eyebrow}
              title={problems.title}
              intro={problems.intro}
            />
          }
          rows={<RuleList items={problems.items} />}
        />
      </div>
    </section>
  );
}
