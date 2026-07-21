"use client";

/**
 * "Ürünü görün" — real product screenshots (geo analysis, dashboard, reports)
 * in an auto-advancing crossfade slideshow. Title/subtitle swap with the
 * active slide; a dot pager lets visitors jump directly and resets the timer.
 */

import Image from "next/image";
import { useEffect, useState } from "react";
import { productPreview } from "@/content/landing";

const AUTO_ADVANCE_MS = 5000;

export default function ProductPreviewSection() {
  const { slides, eyebrow, carouselLabel, slideLabel } = productPreview;
  const [index, setIndex] = useState(0);
  const active = slides[index];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [index, slides.length]);

  return (
    <section className="bg-white">
      <div className="section">
        <div className="mx-auto mb-12 max-w-[820px] text-center">
          <p className="eyebrow justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="h2 sm:whitespace-nowrap !text-[30px]">{active.title}</h2>
          <p className="mx-auto mt-4 max-w-[640px] text-base leading-relaxed text-slate-500">{active.text}</p>
        </div>

        <div
          className="rounded-[24px] border border-line p-2 shadow-pop"
          role="group"
          aria-roledescription="carousel"
          aria-label={carouselLabel}
        >
          <div className="relative h-[280px] overflow-hidden rounded-[18px] bg-surface sm:h-[380px] lg:h-[520px]">
            {slides.map((slide, i) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                sizes="(min-width: 1024px) 1152px, 100vw"
                priority={i === 0}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={i !== index}
              />
            ))}
          </div>
        </div>

        <div className="mt-[22px] flex justify-center gap-2.5">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
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
