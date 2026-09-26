/**
 * Site-wide scroll motion vocabulary. Components spread these attribute
 * objects onto elements; the behaviour lives in app/globals.css (keyframes,
 * scroll-driven timelines) and components/motion/ScrollMotion.tsx (the
 * IntersectionObserver that sets `data-in`). Keeping the variant names as
 * union types turns a typo into a compile error instead of a silent no-op.
 *
 * Rule: never put these on a page's first section (hero / intro / LCP).
 *
 * Every helper that lands on an element the pre-hydration boot script
 * (components/motion/ScrollMotion.tsx) may mark (`data-in="static"`,
 * `data-static`) also sets `suppressHydrationWarning` in development, where
 * React diffs extra DOM attributes on hydration and would warn. Production
 * React never runs that diff, so the prop is left out there: it would only
 * add bytes to every page's RSC payload.
 */

const hydrationSafe =
  process.env.NODE_ENV === "production" ? {} : ({ suppressHydrationWarning: true } as const);

/** One-shot entrance, triggered when the element scrolls into view. */
export type RevealVariant =
  | "mask" // headings: text rises out of a clip mask
  | "up" // eyebrows, intros, paragraphs, blocks
  | "settle" // cards: rise + scale into place with a slight overshoot
  | "fade"; // quiet strips and list rows

/** Scroll-linked (scrubbed) effect; falls back to a timed reveal where unsupported. */
export type ScrubVariant =
  | "panel" // the page peak: dark section opens from an inset to full bleed
  | "unveil" // image wrapper: square clip opens, inner image zooms out
  | "unveil-soft" // lighter unveil for secondary images
  | "tilt" // screenshot stage: tipped back in 3D, stands up as it enters
  | "drift"; // foreground copy over a photo drifts slower than the page (desktop only)

export const reveal = (variant: RevealVariant = "up") => ({ "data-reveal": variant, ...hydrationSafe });

/**
 * Children of this element reveal individually; items entering together are
 * staggered in DOM order. Pass the variant the children should use.
 */
export const stagger = (variant: RevealVariant = "settle") => ({ "data-stagger": variant, ...hydrationSafe });

export const scrub = (variant: ScrubVariant) => ({ "data-scrub": variant, ...hydrationSafe });

/** Inner image of an `unveil` / `unveil-soft` wrapper; zooms out while the clip opens. */
export const scrubMedia = { "data-scrub-media": "" } as const;

/** Child of a revealed element that pops in after its parent lands. */
export const revealPop = { "data-reveal-pop": "" } as const;
