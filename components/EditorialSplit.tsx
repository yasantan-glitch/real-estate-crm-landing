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
};

export default function EditorialSplit({ framing, rows, reverse = false }: Props) {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-16">
      <div className={reverse ? "md:order-2" : undefined}>{framing}</div>
      <div className={reverse ? "md:order-1" : undefined}>{rows}</div>
    </div>
  );
}
