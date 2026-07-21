import Image from "next/image";
import { references } from "@/content/landing";

/** Slim "Sahada kullanılıyor" trust strip directly under the Hero. */
export default function ReferencesSection() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-5 py-7 text-center sm:px-8">
        <span className="sr-only">
          {references.eyebrow}. {references.intro}
        </span>
        <span className="text-[13.5px] font-semibold text-slate-500">{references.title}</span>
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
    </section>
  );
}
