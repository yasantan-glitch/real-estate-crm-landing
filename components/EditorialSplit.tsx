import type { ReactNode } from "react";

/**
 * Two-column framing/rows layout wrapper for ProblemSection and SolutionSection
 * (see docs/plans/landing-page-redesign-plan.md §5). Stacks on mobile; splits
 * into two columns from `md:` up. `reverse` swaps which side holds the framing
 * copy so the two sections can mirror each other without duplicating layout.
 */

type Props = {
  framing: ReactNode;
  rows: ReactNode;
  reverse?: boolean;
  /**
   * Opt-in: from `lg:` up, pin the framing (text) column within its row so
   * short copy tracks a taller rows column instead of leaving dead space
   * below it. Tracks the TEXT column specifically, so it stays correct under
   * `reverse`. Off by default — other consumers and the mobile/tablet stacked
   * layout are unaffected. `lg:self-start` gives the column travel room within
   * the row; `lg:top-28` (112px) clears the sticky Header (h-20 + 2px border
   * = 82px, z-40) with a 30px gap and never overlaps it (header sits above
   * at z-40).
   */
  stickyFraming?: boolean;
};

export default function EditorialSplit({
  framing,
  rows,
  reverse = false,
  stickyFraming = false,
}: Props) {
  const framingClasses = [
    reverse ? "md:order-2" : "",
    stickyFraming ? "lg:sticky lg:top-28 lg:self-start" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-16">
      <div className={framingClasses || undefined}>{framing}</div>
      <div className={reverse ? "md:order-1" : undefined}>{rows}</div>
    </div>
  );
}
