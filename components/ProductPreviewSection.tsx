"use client";

/**
 * "Ürünü görün" — real product screenshot (geographic analysis screen).
 * Proof-of-realness section between SolutionSection and PipelineSection.
 *
 * "use client" exists only for the IntersectionObserver scroll-reveal below.
 * EditorialSplit is deliberately NOT reused here: its 50/50 grid suits two
 * text columns, but a dense 2:1 UI screenshot needs more width to stay
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
            {/* Full-bleed below `sm` so the UI screenshot stays readable on phones. */}
            <div className="-mx-5 sm:mx-0 lg:col-span-7">
              <Image
                src="/screenshots/geo-analysis-screenshot.webp"
                alt={productPreview.imageAlt}
                width={3350}
                height={1652}
                sizes="(min-width: 1024px) 640px, 100vw"
                className="w-full border-y border-slate-200 shadow-card sm:border"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
