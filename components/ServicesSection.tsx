/**
 * Optional add-on services — deliberately quieter than the CRM product
 * sections: compact rows inside a narrower column so it reads as an
 * appendix, not a second feature list.
 */
import SectionHeading from "./SectionHeading";
import RuleList from "./RuleList";
import { services } from "@/content/landing";

export default function ServicesSection() {
  const midpoint = Math.ceil(services.items.length / 2);
  const columns = [services.items.slice(0, midpoint), services.items.slice(midpoint)];

  return (
    <section id="hizmetler" className="scroll-mt-16 bg-white">
      <div className="section">
        <div className="max-w-4xl">
          <SectionHeading eyebrow={services.eyebrow} title={services.title} intro={services.intro} />
          <div className="mt-8 grid gap-x-12 md:grid-cols-2">
            {columns.map((column) => (
              <RuleList key={column[0].title} items={column} density="compact" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
