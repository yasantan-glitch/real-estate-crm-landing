"use client";

/**
 * Generic fullscreen image lightbox — controlled by the parent (which owns
 * the open index). Supports ESC/backdrop-click to close, arrow keys/buttons
 * to navigate, body scroll lock while open, and a slide counter.
 * Swipe-to-navigate on touch is intentionally out of scope for now.
 */

import Image from "next/image";
import { useEffect, useRef } from "react";

type LightboxSlide = {
  src: string;
  width: number;
  height: number;
  alt: string;
  objectPosition?: string;
};

type ImageLightboxProps = {
  slides: LightboxSlide[];
  index: number;
  onClose: () => void;
  onIndexChange: (nextIndex: number) => void;
  label: string;
  closeLabel: string;
};

export default function ImageLightbox({
  slides,
  index,
  onClose,
  onIndexChange,
  label,
  closeLabel,
}: ImageLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const current = slides[index];

  const goPrev = () => onIndexChange((index - 1 + slides.length) % slides.length);
  const goNext = () => onIndexChange((index + 1) % slides.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, slides.length, onClose, onIndexChange]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label={closeLabel}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
          <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Önceki görsel"
        className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-4"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
          <path d="M12.5 15 7.5 10l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Sonraki görsel"
        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-4"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
          <path d="M7.5 5 12.5 10l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          width={current.width}
          height={current.height}
          sizes="90vw"
          priority
          style={current.objectPosition ? { objectPosition: current.objectPosition } : undefined}
          className="max-h-[90vh] w-auto rounded-lg object-contain"
        />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80">
        {index + 1} / {slides.length}
      </div>
    </div>
  );
}
