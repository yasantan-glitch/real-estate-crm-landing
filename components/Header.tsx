"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { nav } from "@/content/landing";

/** Below this relative luminance (0=black, 1=white), the background counts as "dark". */
const DARK_LUMINANCE_THRESHOLD = 0.5;

function relativeLuminance(r: number, g: number, b: number) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function parseRgb(color: string): [number, number, number] | null {
  const match = color.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/);
  if (!match) return null;
  const alpha = match[4] === undefined ? 1 : Number(match[4]);
  if (alpha === 0) return null;
  return [Number(match[1]), Number(match[2]), Number(match[3])];
}

/** Finds the nearest ancestor (from `el` upward) with a non-transparent background-color. */
function findBackgroundColor(el: Element | null): [number, number, number] | null {
  let current: Element | null = el;
  while (current) {
    const rgb = parseRgb(getComputedStyle(current).backgroundColor);
    if (rgb) return rgb;
    current = current.parentElement;
  }
  return null;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const measure = () => {
      ticking = false;
      const header = headerRef.current;
      if (!header) return;

      const rect = header.getBoundingClientRect();
      const x = window.innerWidth / 2;
      const y = rect.bottom + 4;
      const target = document.elementFromPoint(x, y);
      const rgb = findBackgroundColor(target);
      if (!rgb) return;

      const luminance = relativeLuminance(...rgb);
      setIsOverDark(luminance < DARK_LUMINANCE_THRESHOLD);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b border-line backdrop-blur-md ${
        isOverDark ? "bg-white/30" : "bg-white/92"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-brand">
          <span className="h-2.5 w-2.5 shrink-0 rounded-[3px] bg-accent" aria-hidden="true" />
          {siteConfig.productName}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Ana menü">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] font-semibold text-slate-700 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#demo" className="btn-primary hidden !px-6 !py-[11px] !text-[14.5px] md:inline-flex">
          {nav.cta}
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand md:hidden"
          aria-expanded={open}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen(!open)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-5 py-4 md:hidden" aria-label="Mobil menü">
          <ul className="flex flex-col gap-1">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-surface"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#demo" className="btn-primary w-full" onClick={() => setOpen(false)}>
                {nav.cta}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
