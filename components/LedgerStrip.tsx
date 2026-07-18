/**
 * Signature visual primitive (see docs/plans/landing-page-redesign-plan.md §3/§5).
 * Renders CRM listing/pipeline rows as a hairline-ruled ledger table instead of
 * a KPI-tile dashboard mockup. Pure presentation — no data fetching, no client JS.
 *
 * `rows` is caller-supplied so this stays copy-agnostic; real row data lives in
 * content/landing.ts (e.g. `pipelineStages.rows`) alongside the rest of the
 * site's Turkish copy.
 */

import type { LedgerRow, LedgerStatusTone } from "@/types/ledger";

type Props = {
  rows: LedgerRow[];
  variant: "light" | "dark";
  /** Accessible table summary; not rendered visually (avoids duplicating a section heading). */
  caption: string;
};

const STATUS_MARK: Record<LedgerStatusTone, string> = {
  pending: "○",
  inProgress: "◆",
  matched: "●",
  closed: "✓",
};

export default function LedgerStrip({ rows, variant, caption }: Props) {
  const isDark = variant === "dark";

  return (
    <div
      className={`w-full overflow-x-auto border-y font-mono ${
        isDark ? "border-white/15 bg-brand text-white" : "border-slate-200 bg-white text-brand"
      }`}
    >
      <table className="w-full min-w-[560px] border-collapse text-left text-[11px] sm:text-xs">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className={`border-b ${isDark ? "border-white/15" : "border-slate-200"}`}>
            <th scope="col" className="whitespace-nowrap px-3 py-2.5 font-medium uppercase tracking-[0.14em] sm:px-4">
              Kod
            </th>
            <th scope="col" className="whitespace-nowrap px-3 py-2.5 font-medium uppercase tracking-[0.14em] sm:px-4">
              Portföy
            </th>
            <th scope="col" className="whitespace-nowrap px-3 py-2.5 font-medium uppercase tracking-[0.14em] sm:px-4">
              Danışman
            </th>
            <th scope="col" className="whitespace-nowrap px-3 py-2.5 font-medium uppercase tracking-[0.14em] sm:px-4">
              Durum
            </th>
            <th scope="col" className="whitespace-nowrap px-3 py-2.5 text-right font-medium uppercase tracking-[0.14em] sm:px-4">
              Detay
            </th>
          </tr>
        </thead>
        <tbody className={`divide-y ${isDark ? "divide-white/15" : "divide-slate-200"}`}>
          {rows.map((row) => (
            <tr key={row.code}>
              <td className="whitespace-nowrap px-3 py-2.5 sm:px-4">{row.code}</td>
              <td className="px-3 py-2.5 sm:px-4">
                <span>{row.propertyType}</span>
                <span className={isDark ? "block text-white/60" : "block text-muted"}>{row.district}</span>
              </td>
              <td className="whitespace-nowrap px-3 py-2.5 sm:px-4">{row.consultant}</td>
              <td className="whitespace-nowrap px-3 py-2.5 sm:px-4">
                <span aria-hidden="true" className={row.status.tone === "matched" ? "text-accent" : undefined}>
                  {STATUS_MARK[row.status.tone]}
                </span>{" "}
                {row.status.label}
              </td>
              <td className="whitespace-nowrap px-3 py-2.5 text-right sm:px-4">
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
