import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { references } from "@/content/landing";

export default function ReferencesSection() {
  return (
    <section className="bg-surface">
      <div className="section">
        <SectionHeading
          eyebrow={references.eyebrow}
          title={references.title}
          intro={references.intro}
        />
        <ul className="mt-10 flex flex-wrap items-center gap-8 md:gap-12">
          {references.logos.map((logo) => (
            <li key={logo.src} className="flex items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto md:h-12"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
