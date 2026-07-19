/**
 * Hairline-divided row list — replaces the repeated "grid of .card" pattern
 * used across Problem/Solution/Features/Audience/Services sections
 * (see docs/plans/landing-page-redesign-plan.md §5). Content-agnostic:
 * callers pass their own Turkish copy via `items`.
 */

type RuleListItem = {
  /** Optional leading label (e.g. "01", "PF"). Caller controls formatting. */
  index?: string;
  title: string;
  text: string;
};

type Props = {
  items: RuleListItem[];
  density?: "default" | "compact";
  /**
   * Prefix each row with a zero-padded two-digit position (01, 02 …) in
   * IBM Plex Mono — the system's data/label face — as a quiet scan aid for
   * dense lists. Derived from array position, so it needs no data changes;
   * additive and independent of the optional `index` field. Decorative
   * (aria-hidden): row titles stay the semantic structure.
   */
  numbered?: boolean;
};

const DENSITY = {
  default: { row: "py-5", title: "text-lg", text: "text-base" },
  compact: { row: "py-3.5", title: "text-base", text: "text-sm" },
} as const;

export default function RuleList({ items, density = "default", numbered = false }: Props) {
  const hasIndex = items.some((item) => item.index !== undefined);
  const sizing = DENSITY[density];

  return (
    <ul className="divide-y divide-slate-200">
      {items.map((item, i) => (
        <li key={item.title} className={sizing.row}>
          <div className="flex items-baseline gap-3">
            {numbered ? (
              <span className="w-6 shrink-0 font-mono text-xs tabular-nums text-muted" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
            ) : (
              hasIndex && (
                <span className="w-6 shrink-0 text-xs text-muted" aria-hidden={item.index === undefined}>
                  {item.index}
                </span>
              )
            )}
            <div className="min-w-0">
              <h3 className={`font-semibold text-brand ${sizing.title}`}>{item.title}</h3>
              <p className={`mt-1 leading-relaxed text-muted ${sizing.text}`}>{item.text}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
