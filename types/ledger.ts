export type LedgerStatusTone = "pending" | "inProgress" | "matched" | "closed";

export type LedgerStatus = {
  /** Turkish status text, always shown — status is never conveyed by color/shape alone. */
  label: string;
  tone: LedgerStatusTone;
};

/** Column-header labels; Turkish values live in content/landing.ts (`ledgerLabels`). */
export type LedgerLabels = {
  code: string;
  portfolio: string;
  consultant: string;
  status: string;
  detail: string;
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
