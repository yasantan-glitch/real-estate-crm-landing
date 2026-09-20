import Image from "next/image";
import { hero, references } from "@/content/landing";

/** Slim "Sahada kullanılıyor" trust strip directly under the Hero. */
export default function ReferencesSection() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-7 text-center sm:px-8">
        <p className="mx-auto mb-3 max-w-md text-[13px] text-slate-500">{hero.trustNote}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="sr-only">
            {references.eyebrow}. {references.intro}
          </span>
          <span className="text-[13.5px] font-semibold text-slate-600">{references.title}</span>
          {references.logos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-8 w-auto md:h-9"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
