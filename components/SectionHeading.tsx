type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, intro, dark }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className={dark ? "h2 !text-white" : "h2"}>{title}</h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
