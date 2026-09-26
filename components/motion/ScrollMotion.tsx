"use client";

/**
 * Site-wide scroll reveal driver, mounted once at the end of <body> in
 * app/layout.tsx. It renders only the inline boot script below, which
 * decides before first paint whether motion runs at all (`html[data-motion]`
 * is only set when the visitor has no reduced-motion preference), so with JS
 * off or reduced motion every element is simply visible and this component
 * exits early.
 * That script also marks what was inside the first viewport as static
 * (`data-in="static"`, or `data-static="k"` on a stagger parent); here the
 * first k children of such parents get `data-in="static"` too, so the
 * observer never animates anything the visitor saw on load.
 *
 * It watches `[data-reveal]`, children of `[data-stagger]` and `[data-scrub]`
 * elements (see lib/motion.ts) and sets `data-in` once each enters the
 * viewport; the CSS in app/globals.css animates from there. Elements that
 * enter in the same observer batch get increasing `--reveal-delay`, so a row
 * of cards lands one after another while a single-column stack on mobile
 * never waits. A data attribute (not a class) is used because React leaves
 * attributes it does not own alone when client components re-render.
 *
 * A MutationObserver picks up nodes added later (client-side navigation,
 * gallery tab switches). It also keeps `data-motion` in sync with the
 * viewport width: "scrub" (scroll-linked, desktop + supporting browsers) or
 * "timed" (time-based fallback: mobile, Firefox).
 */

import { useEffect } from "react";

const TARGETS =
  "[data-reveal]:not([data-in]), [data-stagger] > :not([data-in]), [data-scrub]:not([data-in])";
const STAGGER_MS = 90;
const MAX_STAGGER_STEPS = 6;
const SCRUB_QUERY = "(min-width: 768px)";

/**
 * Motion boot, rendered inline by this component at the end of <body>
 * (app/layout.tsx), so it runs synchronously once the page's HTML is parsed
 * and laid out, before first paint and without waiting for hydration. Motion is opt-in: nothing happens with reduced motion or JS
 * off, so no hidden start state ever applies there.
 *
 * 1. Anything already inside the first viewport stays visible and static:
 *    reveal/scrub elements get data-in="static"; a stagger parent gets
 *    data-static="k" when its first k children are on screen (children of a
 *    grid or stack enter the viewport in DOM order, so a prefix count is
 *    enough and the children themselves are never touched before hydration).
 * 2. Only then is `data-motion` set, which hides what is left: all of it is
 *    below the fold, so even an earlier paint never shows anything vanish.
 *    It starts as "timed"; the effect below switches it to "scrub"
 *    (scroll-linked CSS timelines, supporting browser, >= 768px) after
 *    hydration, which only affects elements that are still off screen.
 * 3. If ScrollMotion has not booted within 4s (slow or failed hydration),
 *    `data-motion` is dropped and all content shows.
 *
 * Rendered from this Client Component (not from the server layout) so the
 * script text ships once in the HTML instead of again in the RSC payload;
 * it is minified by hand and kept minimal for the same reason: it sits in
 * every page's HTML, and /fiyatlandirma's document is right at the ~14.6 KB
 * first TCP window, where one byte too many costs a round trip.
 * The server/client `type` switch and suppressHydrationWarning follow
 * node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md.
 */
const BOOT_SCRIPT = `(function(){try{var d=document,e=d.documentElement,h=innerHeight,v=function(n){var r=n.getBoundingClientRect();return r.top<h&&r.bottom>0};if(!matchMedia("(prefers-reduced-motion:no-preference)").matches)return;d.querySelectorAll("[data-reveal],[data-scrub]").forEach(function(n){v(n)&&n.setAttribute("data-in","static")});d.querySelectorAll("[data-stagger]").forEach(function(p){for(var c=p.children,k=0,i=0;i<c.length;i++)v(c[i])&&(k=i+1);k&&p.setAttribute("data-static",k>16?16:k)});e.setAttribute("data-motion","timed");setTimeout(function(){window.__motionBoot||e.removeAttribute("data-motion")},4e3)}catch(x){}})()`;

declare global {
  interface Window {
    __motionBoot?: boolean;
  }
}

export default function ScrollMotion() {
  useEffect(() => {
    window.__motionBoot = true;
    const root = document.documentElement;
    if (!root.hasAttribute("data-motion")) return;
    if (!("IntersectionObserver" in window)) {
      root.removeAttribute("data-motion");
      return;
    }

    const supportsScrub = CSS.supports("animation-timeline: view()");
    const wide = window.matchMedia(SCRUB_QUERY);
    const syncMode = () => {
      root.dataset.motion = supportsScrub && wide.matches ? "scrub" : "timed";
    };
    syncMode();
    wide.addEventListener("change", syncMode);

    const io = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top ||
              a.boundingClientRect.left - b.boundingClientRect.left
          );
        entering.forEach((entry, step) => {
          const el = entry.target as HTMLElement;
          el.style.setProperty(
            "--reveal-delay",
            `${Math.min(step, MAX_STAGGER_STEPS) * STAGGER_MS}ms`
          );
          el.setAttribute("data-in", "");
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px" }
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>("[data-stagger][data-static]").forEach((parent) => {
        Array.from(parent.children)
          .slice(0, Number(parent.dataset.static))
          .forEach((child) => child.hasAttribute("data-in") || child.setAttribute("data-in", "static"));
      });
      document.querySelectorAll(TARGETS).forEach((el) => io.observe(el));
    };
    scan();

    let frame = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      wide.removeEventListener("change", syncMode);
      cancelAnimationFrame(frame);
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }}
    />
  );
}
