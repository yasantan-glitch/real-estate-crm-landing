"use client";

import { useEffect, useState } from "react";
import { stickyCta } from "@/content/landing";

/** Approximates the sticky header's height so the bar appears once Hero is actually hidden behind it. */
const HEADER_HEIGHT_PX = 64;

export default function MobileStickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: `-${HEADER_HEIGHT_PX}px 0px 0px 0px` }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      role="region"
      aria-label={stickyCta.regionLabel}
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-5 py-3 backdrop-blur-md transition-all duration-300 ease-out md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <a href={stickyCta.href} className="btn-primary w-full" tabIndex={visible ? undefined : -1}>
        {stickyCta.label}
      </a>
    </div>
  );
}
