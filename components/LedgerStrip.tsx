/**
 * Signature visual primitive (see docs/plans/landing-page-redesign-plan.md §3/§5).
 * Renders CRM listing/pipeline rows as a hairline-ruled ledger table instead of
 * a KPI-tile dashboard mockup. Pure presentation — no data fetching, no client JS.
 *
 * `rows` is caller-supplied so this stays copy-agnostic; real row data lives in
 * content/landing.ts (e.g. `pipelineStages.rows`) alongside the rest of the
 * site's Turkish copy.
 */

import type { LedgerLabels, LedgerRow, LedgerStatusTone } from "@/types/ledger";

type Props = {
  rows: LedgerRow[];
  variant: "light" | "dark";
  /** Accessible table summary; not rendered visually (avoids duplicating a section heading). */
  caption: string;
  labels: LedgerLabels;
};

const STATUS_MARK: Record<LedgerStatusTone, string> = {
  pending: "○",
  inProgress: "◆",
  matched: "●",
  closed: "✓",
};

export default function LedgerStrip({ rows, variant, caption, labels }: Props) {
  const isDark = variant === "dark";

  return (
    <div
      className={`w-full border-y font-mono ${
        isDark ? "border-white/15 bg-brand-soft text-white" : "border-slate-200 bg-white text-brand"
      }`}
    >
      {/*
       * Column priority: Durum and Detay must stay visible at phone widths —
       * they carry the section's message (status / stage / price). Danışman is
       * the demoted column (hidden below `sm`), and no horizontal scrolling is
       * required to read a row.
       */}
      <table className="w-full border-collapse text-left text-[11px] sm:text-xs">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className={`border-b ${isDark ? "border-white/15" : "border-slate-200"}`}>
            <th scope="col" className="whitespace-nowrap py-2 pl-1 pr-2 font-medium uppercase tracking-[0.14em] sm:px-4">
              {labels.code}
            </th>
            <th scope="col" className="py-2 pr-2 font-medium uppercase tracking-[0.14em] sm:px-4">
              {labels.portfolio}
            </th>
            <th scope="col" className="hidden py-2 pr-2 font-medium uppercase tracking-[0.14em] sm:table-cell sm:px-4">
              {labels.consultant}
            </th>
            <th scope="col" className="whitespace-nowrap py-2 pr-2 font-medium uppercase tracking-[0.14em] sm:px-4">
              {labels.status}
            </th>
            <th scope="col" className="py-2 pr-1 text-right font-medium uppercase tracking-[0.14em] sm:px-4">
              {labels.detail}
            </th>
          </tr>
        </thead>
        <tbody className={`divide-y ${isDark ? "divide-white/15" : "divide-slate-200"}`}>
          {rows.map((row) => (
            <tr key={row.code}>
              <td className="whitespace-nowrap py-2 pl-1 pr-2 align-top sm:px-4">{row.code}</td>
              <td className="py-2 pr-2 align-top sm:px-4">
                <span>{row.propertyType}</span>
                <span className={isDark ? "block text-white/60" : "block text-muted"}>{row.district}</span>
              </td>
              <td className="hidden py-2 pr-2 align-top sm:table-cell sm:px-4">{row.consultant}</td>
              <td className="whitespace-nowrap py-2 pr-2 align-top sm:px-4">
                <span aria-hidden="true" className={row.status.tone === "matched" ? "text-accent" : undefined}>
                  {STATUS_MARK[row.status.tone]}
                </span>{" "}
                {row.status.label}
              </td>
              <td className="py-2 pr-1 text-right align-top sm:px-4">
                {row.detailLabel && <span className="sr-only">{row.detailLabel}: </span>}
                {row.detail}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
