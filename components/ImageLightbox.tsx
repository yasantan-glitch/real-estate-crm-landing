"use client";

/**
 * Generic fullscreen image lightbox, controlled by the parent (which owns the
 * open index). Closes on Esc or a click on the backdrop and returns focus to
 * the element that opened it; Tab is trapped inside the dialog. Arrow keys,
 * buttons and touch swipes navigate (wrapping). The neighbouring slides are
 * warmed up with the same srcset/sizes so prev/next show without a wait.
 * Body scroll is locked while open. Images are square-cornered by design.
 */

import Image, { getImageProps } from "next/image";
import { useEffect, useRef, type MouseEvent } from "react";
import { useSwipe } from "@/lib/useSwipe";

type LightboxSlide = {
  src: string;
  width: number;
  height: number;
  alt: string;
  objectPosition?: string;
  /** Shown under the image: a small label (e.g. the module) and one line of text. */
  caption?: { label: string; text: string };
};

type ImageLightboxProps = {
  slides: LightboxSlide[];
  index: number;
  onClose: () => void;
  onIndexChange: (nextIndex: number) => void;
  label: string;
  closeLabel: string;
  prevLabel: string;
  nextLabel: string;
};

const SLIDE_SIZES = "100vw";

export default function ImageLightbox({
  slides,
  index,
  onClose,
  onIndexChange,
  label,
  closeLabel,
  prevLabel,
  nextLabel,
}: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const current = slides[index];

  const goPrev = () => onIndexChange((index - 1 + slides.length) % slides.length);
  const goNext = () => onIndexChange((index + 1) % slides.length);

  const { swipeHandlers, consumeSwipe } = useSwipe({ onSwipeLeft: goNext, onSwipeRight: goPrev });

  // Latest handlers for the window listener, so it never acts on a stale index.
  const actions = useRef({ onClose, goPrev, goNext });
  actions.current = { onClose, goPrev, goNext };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") actions.current.onClose();
      else if (e.key === "ArrowLeft") actions.current.goPrev();
      else if (e.key === "ArrowRight") actions.current.goNext();
      else if (e.key === "Tab") trapFocus(e, dialogRef.current);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Move focus in on open, hand it back to the opener on close.
  useEffect(() => {
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();
    return () => opener?.focus();
  }, []);

  useEffect(() => {
    if (slides.length < 2) return;
    const neighbours = new Set([(index + 1) % slides.length, (index - 1 + slides.length) % slides.length]);
    neighbours.forEach((i) => {
      const slide = slides[i];
      const { props } = getImageProps({
        src: slide.src,
        width: slide.width,
        height: slide.height,
        alt: "",
        sizes: SLIDE_SIZES,
      });
      const img = new window.Image();
      if (props.sizes) img.sizes = props.sizes;
      if (props.srcSet) img.srcset = props.srcSet;
      img.src = props.src;
    });
  }, [index, slides]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (consumeSwipe()) return;
    if (e.target instanceof HTMLElement && e.target.dataset.backdrop !== undefined) onClose();
  };

  const navButtonClass =
    "absolute flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[100] flex touch-pan-y flex-col bg-zinc-950"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      data-backdrop
      onClick={handleClick}
      {...swipeHandlers}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label={closeLabel}
        className={`${navButtonClass} right-4 top-4 !h-10 !w-10`}
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
          <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div data-backdrop className="flex min-h-0 flex-1 items-center justify-center px-4 pt-16 sm:px-20">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          width={current.width}
          height={current.height}
          sizes={SLIDE_SIZES}
          loading="eager"
          draggable={false}
          style={current.objectPosition ? { objectPosition: current.objectPosition } : undefined}
          className="h-auto max-h-[calc(100dvh-11rem)] w-auto max-w-full select-none object-contain outline outline-1 outline-white/10"
        />
      </div>

      <div data-backdrop className="relative px-16 pb-5 pt-4 text-center sm:px-20" aria-live="polite">
        {current.caption && (
          <>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-accent">{current.caption.label}</p>
            <p className="mx-auto mt-1.5 max-w-[65ch] text-sm leading-relaxed text-white/85">{current.caption.text}</p>
          </>
        )}
        <p className="mt-2 text-xs tabular-nums text-white/60">
          {index + 1} / {slides.length}
        </p>
      </div>

      <button
        type="button"
        onClick={goPrev}
        aria-label={prevLabel}
        className={`${navButtonClass} bottom-5 left-3 sm:bottom-auto sm:left-4 sm:top-1/2 sm:-translate-y-1/2`}
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
          <path d="M12.5 15 7.5 10l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label={nextLabel}
        className={`${navButtonClass} bottom-5 right-3 sm:bottom-auto sm:right-4 sm:top-1/2 sm:-translate-y-1/2`}
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
          <path d="M7.5 5 12.5 10l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

/** Keeps Tab / Shift+Tab cycling through the dialog's focusable elements. */
function trapFocus(e: KeyboardEvent, container: HTMLElement | null) {
  if (!container) return;
  const focusable = Array.from(
    container.querySelectorAll<HTMLElement>('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'),
  );
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement;

  if (!container.contains(active)) {
    e.preventDefault();
    first.focus();
  } else if (e.shiftKey && active === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && active === last) {
    e.preventDefault();
    first.focus();
  }
}
