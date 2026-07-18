import SectionHeading from "./SectionHeading";
import RuleList from "./RuleList";
import { audience } from "@/content/landing";

export default function AudienceSection() {
  const midpoint = Math.ceil(audience.items.length / 2);
  const columns = [audience.items.slice(0, midpoint), audience.items.slice(midpoint)];

  return (
    <section id="kimler-icin" className="scroll-mt-16 bg-surface">
      <div className="section">
        <SectionHeading eyebrow={audience.eyebrow} title={audience.title} />
        <div className="mt-10 grid gap-x-16 md:grid-cols-2">
          {columns.map((column) => (
            <RuleList key={column[0].title} items={column} />
          ))}
        </div>
      </div>
    </section>
  );
}
