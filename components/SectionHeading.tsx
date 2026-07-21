type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
  /** Centers the heading block and its text — used for the page's section intros. */
  center?: boolean;
};

export default function SectionHeading({ eyebrow, title, intro, dark, center }: Props) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow ${dark ? "eyebrow-on-dark" : ""} ${center ? "justify-center" : ""}`}>
        <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-red-400" : "bg-accent"}`} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className={dark ? "h2 !text-white" : "h2"}>{title}</h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-zinc-400" : "text-slate-500"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
