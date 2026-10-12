import { reveal } from "@/lib/motion";

export interface ContextLink {
  label: string;
  href: string;
}

/** Compact "see also" strip: one intro sentence followed by a short list of descriptive links. */
export default function ContextLinks({
  intro,
  links,
  tone = "white",
}: {
  intro: string;
  links: ContextLink[];
  tone?: "white" | "surface";
}) {
  return (
    <section className={`border-t border-line ${tone === "surface" ? "bg-surface" : "bg-white"}`}>
      <div className="mx-auto w-full max-w-[820px] px-5 py-10 text-center sm:px-8">
        <p className="text-[14.5px] leading-relaxed text-slate-600" {...reveal("up")}>
          {intro}
        </p>
        <ul className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-semibold text-accent underline underline-offset-2">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
