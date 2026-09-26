"use client";

/**
 * Pill tab strip. Keyboard: roving tabindex, Left/Right (wrapping) and
 * Home/End move focus and activate the tab. With `idPrefix`, tabs get
 * `${idPrefix}-tab-${id}` ids and point `aria-controls` at the caller's
 * `${idPrefix}-panel`. When the strip overflows (narrow screens) it scrolls
 * horizontally; auto margins on the first/last pill center it only while it
 * fits, so the first pills never get clipped out of reach.
 */

import { useEffect, useRef, type KeyboardEvent } from "react";

export type TabItem = {
  id: string;
  label: string;
};

export default function Tabs({
  items,
  activeId,
  onChange,
  idPrefix,
  ariaLabel,
}: {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  idPrefix?: string;
  ariaLabel?: string;
}) {
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef(new Map<string, HTMLButtonElement>());

  // Keep the active pill in view when it changes from outside the strip
  // (e.g. a swipe). Scrolls only the strip, so the page never jumps.
  useEffect(() => {
    const list = listRef.current;
    const tab = tabRefs.current.get(activeId);
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    list.scrollTo({
      left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [activeId]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null;
    if (e.key === "ArrowRight") nextIndex = (index + 1) % items.length;
    else if (e.key === "ArrowLeft") nextIndex = (index - 1 + items.length) % items.length;
    else if (e.key === "Home") nextIndex = 0;
    else if (e.key === "End") nextIndex = items.length - 1;
    if (nextIndex === null) return;

    e.preventDefault();
    const next = items[nextIndex];
    onChange(next.id);
    tabRefs.current.get(next.id)?.focus();
  };

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label={ariaLabel}
      className="relative -m-1 flex flex-nowrap gap-2 overflow-x-auto p-1"
    >
      {items.map((item, index) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            ref={(el) => {
              if (el) tabRefs.current.set(item.id, el);
              else tabRefs.current.delete(item.id);
            }}
            type="button"
            role="tab"
            id={idPrefix ? `${idPrefix}-tab-${item.id}` : undefined}
            aria-controls={idPrefix ? `${idPrefix}-panel` : undefined}
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(item.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-xs font-bold transition-colors first:ml-auto last:mr-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-4 sm:py-2.5 sm:text-sm ${
              isActive
                ? "bg-accent text-white"
                : "border-[1.5px] border-line bg-white text-brand hover:border-brand"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
