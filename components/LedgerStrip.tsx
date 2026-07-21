/**
 * Signature visual primitive — a white card framing a short list of CRM
 * listing/pipeline rows, styled after a browser-chrome preview panel (dark
 * header strip + three dots). Pure presentation — no data fetching, no
 * client JS. `rows` is caller-supplied so this stays copy-agnostic; real row
 * data lives in content/landing.ts (e.g. `heroLedger.rows`).
 */

import type { LedgerLabels, LedgerRow, LedgerStatusTone } from "@/types/ledger";

type Props = {
  rows: LedgerRow[];
  variant: "light" | "dark";
  /** Full accessible label for the row list; the header strip shows a short version derived from it. */
  caption: string;
  labels: LedgerLabels;
};

const STATUS_STYLE: Record<LedgerStatusTone, string> = {
  inProgress: "bg-accent-tint text-accent",
  pending: "bg-zinc-100 text-zinc-700",
  matched: "bg-zinc-200 text-zinc-500",
  closed: "bg-zinc-200 text-zinc-500",
};

export default function LedgerStrip({ rows, variant, caption, labels }: Props) {
  const isDark = variant === "dark";
  const headerLabel = caption.split(":")[0];

  return (
    <div
      className={`rounded-3xl border p-1.5 shadow-pop ${
        isDark ? "border-zinc-800 bg-brand-soft" : "border-line bg-white"
      }`}
    >
      <div className="flex items-center justify-between rounded-[18px] bg-brand px-5 py-4">
        <span className="text-[13px] font-bold text-white">{headerLabel}</span>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="h-2 w-2 rounded-full bg-zinc-600" />
          <span className="h-2 w-2 rounded-full bg-zinc-700" />
        </span>
      </div>
      <ul className="px-1 py-2" aria-label={caption}>
        {rows.map((row) => (
          <li
            key={row.code}
            className={`flex items-center justify-between gap-3 border-b px-3 py-3.5 last:border-b-0 ${
              isDark ? "border-white/10" : "border-zinc-100"
            }`}
          >
            <span className="sr-only">
              {labels.code}: {row.code}
            </span>
            <div className="min-w-0">
              <p className={`text-sm font-bold ${isDark ? "text-white" : "text-brand"}`}>
                <span className="sr-only">{labels.portfolio}: </span>
                {row.propertyType}
              </p>
              <p className={`text-xs ${isDark ? "text-white/50" : "text-slate-400"}`}>
                <span className="sr-only">{labels.district}: </span>{row.district} · <span className="sr-only">{labels.consultant}: </span>{row.consultant}
              </p>
            </div>
            <div className="flex-shrink-0 text-right">
              <p className={`text-[13.5px] font-bold ${isDark ? "text-white" : "text-brand"}`}>
                <span className="sr-only">{(row.detailLabel ?? labels.detail)}: </span>
                {row.detail}
              </p>
              <span
                className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${STATUS_STYLE[row.status.tone]}`}
              >
                <span className="sr-only">{labels.status}: </span>
                {row.status.label}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
