"use client";

/**
 * Filmstrip of all source screenshots directly under the static device
 * composition above it — no heading of its own, reads as a continuation of
 * ProductPreviewSection. Arrow buttons + native scroll-snap move the strip
 * (touch swipe works for free); clicking a thumbnail opens the fullscreen
 * ImageLightbox to browse the same images at full size.
 */

import Image from "next/image";
import { useRef, useState } from "react";
import { productGallery } from "@/content/landing";
import ImageLightbox from "@/components/ImageLightbox";

export default function ProductGallerySection() {
  const { carouselLabel, slideLabel, lightboxLabel, closeLabel, slides } = productGallery;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByThumb = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const thumb = el.firstElementChild as HTMLElement | null;
    const step = thumb ? thumb.clientWidth + 12 : 240;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="bg-surface">
      <div className="section">
        <div
          className="relative mx-auto max-w-[900px]"
          role="group"
          aria-roledescription="carousel"
          aria-label={carouselLabel}
        >
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((slide, i) => (
              <button
                key={slide.src + i}
                type="button"
                onClick={(e) => {
                  lastTriggerRef.current = e.currentTarget;
                  setOpenIndex(i);
                }}
                aria-label={`${slideLabel} ${i + 1} — büyüt`}
                className="relative aspect-video w-[220px] flex-none snap-start overflow-hidden rounded-[14px] border border-line bg-white shadow-card transition-transform hover:scale-[1.02] sm:w-[260px]"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 640px) 260px, 220px"
                  style={slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined}
                  className="object-cover"
                  priority={i === 0}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByThumb(-1)}
            aria-label="Önceki görseller"
            className="absolute left-0 top-1/2 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/90 text-brand shadow-card transition-colors hover:bg-surface sm:flex"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
              <path d="M12.5 15 7.5 10l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByThumb(1)}
            aria-label="Sonraki görseller"
            className="absolute right-0 top-1/2 hidden h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/90 text-brand shadow-card transition-colors hover:bg-surface sm:flex"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
              <path d="M7.5 5 12.5 10l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {openIndex !== null && (
        <ImageLightbox
          slides={slides}
          index={openIndex}
          onClose={() => {
            setOpenIndex(null);
            lastTriggerRef.current?.focus();
          }}
          onIndexChange={setOpenIndex}
          label={lightboxLabel}
          closeLabel={closeLabel}
        />
      )}
    </section>
  );
}
