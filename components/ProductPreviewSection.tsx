"use client";

/**
 * "Ürünü görün" — real product screenshots (geo analysis, dashboard, reports)
 * in a manual carousel. Proof-of-realness section between SolutionSection and
 * PipelineSection.
 *
 * "use client" covers the IntersectionObserver scroll-reveal and the carousel
 * state. EditorialSplit is deliberately NOT reused here: its 50/50 grid suits
 * two text columns, but a dense 2:1 UI screenshot needs more width to stay
 * legible, so this section uses an asymmetric 5/7 split instead.
 */

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import SectionHeading from "./SectionHeading";
import { productPreview } from "@/content/landing";

/**
 * Fade-in + slight rise on first viewport entry. SSR markup renders the final
 * (visible) state, so no-JS users and screen readers never get hidden content;
 * the hidden state is applied client-side only, and skipped entirely when
 * prefers-reduced-motion is set. Opacity keeps content in the a11y tree.
 */
function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    setHidden(true);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        hidden ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {children}
    </div>
  );
}

const controlButtonClasses =
  "inline-flex h-11 w-11 items-center justify-center border border-slate-200 bg-white text-brand transition-colors hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={`h-4 w-4 ${direction === "left" ? "" : "rotate-180"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M10 3 5 8l5 5" />
    </svg>
  );
}

/**
 * Manual crossfade carousel. No autoplay. Slides are stacked in one grid cell;
 * the container's aspect ratio comes from the first slide, and the three
 * source images differ by under 0.5% in ratio, so switching slides never
 * shifts layout. Inactive slides stay mounted (opacity 0) so the fade runs
 * both ways and images are already loaded on return visits.
 */
function ScreenshotCarousel() {
  const { slides, carouselLabel, previousLabel, nextLabel, slideLabel } =
    productPreview;
  const [index, setIndex] = useState(0);

  const goTo = (next: number) =>
    setIndex((next + slides.length) % slides.length);

  return (
    <div aria-roledescription="carousel" aria-label={carouselLabel} role="group">
      {/* Full-bleed below `sm` so the UI screenshots stay readable on phones.
          The fixed aspect ratio (from slide 1; the others differ by <0.5%)
          keeps the container height identical across slides. */}
      <div
        className="relative -mx-5 border-y border-slate-200 shadow-card sm:mx-0 sm:border"
        style={{ aspectRatio: `${slides[0].width} / ${slides[0].height}` }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={slide.width}
              height={slide.height}
              sizes="(min-width: 1024px) 640px, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* flex-wrap: at narrow widths the control cluster drops below the
          counter instead of overflowing; ml-auto keeps it right-aligned. */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
        <p
          aria-live="polite"
          className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft"
        >
          {slideLabel} {index + 1} / {slides.length}
        </p>
        <div className="ml-auto flex items-center">
          {/* 44px (h-11 w-11) targets on every control; dots are full-size
              buttons with a small visual square inside. */}
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${slideLabel} ${i + 1}`}
              aria-current={i === index}
              className="inline-flex h-11 w-11 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span
                aria-hidden="true"
                className={`h-2 w-2 transition-colors ${
                  i === index ? "bg-accent" : "bg-slate-300 hover:bg-brand-soft"
                }`}
              />
            </button>
          ))}
          <div className="ml-3 flex items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label={previousLabel}
              className={controlButtonClasses}
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label={nextLabel}
              className={controlButtonClasses}
            >
              <Chevron direction="right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductPreviewSection() {
  return (
    <section className="bg-surface">
      <div className="section">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow={productPreview.eyebrow}
                title={productPreview.title}
                intro={productPreview.text}
              />
            </div>
            <div className="lg:col-span-7">
              <ScreenshotCarousel />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
