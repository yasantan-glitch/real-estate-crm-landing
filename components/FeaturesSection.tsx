import SectionHeading from "./SectionHeading";
import RuleList from "./RuleList";
import { features } from "@/content/landing";

export default function FeaturesSection() {
  const midpoint = Math.ceil(features.items.length / 2);
  const columns = [features.items.slice(0, midpoint), features.items.slice(midpoint)];

  return (
    <section id="ozellikler" className="scroll-mt-24 bg-white">
      <div className="section">
        <SectionHeading eyebrow={features.eyebrow} title={features.title} />
        <div className="mt-10 grid gap-x-16 md:grid-cols-2">
          {columns.map((column) => (
            <RuleList key={column[0].title} items={column} density="compact" numbered />
          ))}
        </div>
      </div>
    </section>
  );
}
