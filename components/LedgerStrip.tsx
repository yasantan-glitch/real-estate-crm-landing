/**
 * Signature visual primitive (see docs/plans/landing-page-redesign-plan.md §3/§5).
 * Renders CRM listing/pipeline rows as a hairline-ruled ledger table instead of
 * a KPI-tile dashboard mockup. Pure presentation — no data fetching, no client JS.
 *
 * `rows` is caller-supplied so this stays copy-agnostic; `sampleLedgerRows` below
 * is placeholder demo data for Phase 2 only (LedgerStrip is not wired into any
 * section yet). Once Hero/Pipeline integration happens, real row data should move
 * to content/landing.ts alongside the rest of the site's Turkish copy.
 */

export type LedgerStatusTone = "pending" | "inProgress" | "matched" | "closed";

export type LedgerStatus = {
  /** Turkish status text, always shown — status is never conveyed by color/shape alone. */
  label: string;
  tone: LedgerStatusTone;
};

export type LedgerRow = {
  /** Portfolio/reference code, e.g. "PF-2041". */
  code: string;
  propertyType: string;
  district: string;
  consultant: string;
  status: LedgerStatus;
  /** Asking price or pipeline stage — same field, different meaning by context. */
  detail: string;
  /** Accessible context for `detail` when its meaning isn't obvious from the value alone. */
  detailLabel?: string;
};

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

/**
 * Placeholder demo rows for Phase 2 (component development only — not rendered
 * anywhere yet). Mixes listing-style (`detail` = price) and pipeline-style
 * (`detail` = stage) rows to demonstrate the shared row shape works for both.
 */
export const sampleLedgerRows: LedgerRow[] = [
  {
    code: "PF-2041",
    propertyType: "3+1 Daire",
    district: "Konyaaltı",
    consultant: "A. Yılmaz",
    status: { label: "Eşleşti", tone: "matched" },
    detail: "8.500.000 ₺",
    detailLabel: "Fiyat",
  },
  {
    code: "PF-1988",
    propertyType: "2+1 Kiralık",
    district: "Muratpaşa",
    consultant: "S. Demir",
    status: { label: "Beklemede", tone: "pending" },
    detail: "45.000 ₺/ay",
    detailLabel: "Fiyat",
  },
  {
    code: "PF-2114",
    propertyType: "Villa",
    district: "Döşemealtı",
    consultant: "E. Kaya",
    status: { label: "Aktif", tone: "inProgress" },
    detail: "Yer Gösterme",
    detailLabel: "Aşama",
  },
  {
    code: "PF-1873",
    propertyType: "Dükkan",
    district: "Muratpaşa",
    consultant: "A. Yılmaz",
    status: { label: "Aktif", tone: "inProgress" },
    detail: "Pazarlık",
    detailLabel: "Aşama",
  },
  {
    code: "PF-1725",
    propertyType: "1+1 Daire",
    district: "Konyaaltı",
    consultant: "S. Demir",
    status: { label: "Kapandı", tone: "closed" },
    detail: "Kapandı",
    detailLabel: "Aşama",
  },
];
