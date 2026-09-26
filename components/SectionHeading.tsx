type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  dark?: boolean;
  /** Centers the heading block and its text — used for the page's section intros. */
  center?: boolean;
  /** id on the h2, for a section's aria-labelledby. */
  titleId?: string;
};

export default function SectionHeading({ eyebrow, title, intro, dark, center, titleId }: Props) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`eyebrow ${dark ? "eyebrow-on-dark" : ""} ${center ? "justify-center" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2 id={titleId} className={dark ? "h2 !text-white" : "h2"}>{title}</h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-zinc-400" : "text-slate-600"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
