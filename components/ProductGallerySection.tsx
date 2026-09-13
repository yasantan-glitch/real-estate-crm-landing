"use client";

/**
 * Full screenshot gallery — walks through every source image one at a time
 * (crossfade), directly under the static device composition above it.
 * Auto-advances every 3.5s; arrows and dots both reset the timer.
 */

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { productGallery } from "@/content/landing";

const AUTO_ADVANCE_MS = 3500;

export default function ProductGallerySection() {
  const { eyebrow, title, carouselLabel, slideLabel, slides } = productGallery;
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
  }, [clearTimer, slides.length]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length);
    startTimer();
  };

  return (
    <section className="bg-surface">
      <div className="section">
        <div className="mx-auto mb-10 max-w-[820px] text-center">
          <p className="eyebrow justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="h2 !text-[30px]">{title}</h2>
        </div>

        <div
          className="relative mx-auto max-w-[900px] rounded-[24px] border border-line bg-white p-2 shadow-pop"
          role="group"
          aria-roledescription="carousel"
          aria-label={carouselLabel}
        >
          <div className="relative h-[240px] overflow-hidden rounded-[18px] bg-surface sm:h-[340px] lg:h-[460px]">
            {slides.map((slide, i) => (
              <Image
                key={slide.src + i}
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                sizes="(min-width: 1152px) 900px, calc(100vw - 58px)"
                priority={i === 0}
                style={slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={i !== index}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Önceki görsel"
            className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/90 text-brand shadow-card transition-colors hover:bg-surface"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
              <path d="M12.5 15 7.5 10l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Sonraki görsel"
            className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/90 text-brand shadow-card transition-colors hover:bg-surface"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
              <path d="M7.5 5 12.5 10l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-[22px] flex justify-center gap-2.5">
          {slides.map((slide, i) => (
            <button
              key={slide.src + i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${slideLabel} ${i + 1}`}
              aria-current={i === index}
              className={`h-2 cursor-pointer rounded-full transition-[width,background-color] duration-200 ${
                i === index ? "w-7 bg-accent" : "w-2 bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
