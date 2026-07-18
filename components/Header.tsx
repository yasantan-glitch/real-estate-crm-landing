"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { nav } from "@/content/landing";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand font-display text-sm font-bold text-white">
            {siteConfig.productName.replace(/[\[\]]/g, "").charAt(0) || "C"}
          </span>
          <span className="font-display text-lg font-semibold text-brand">
            {siteConfig.productName}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Ana menü">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a href="#demo" className="btn-primary !px-5 !py-2.5">
            {nav.cta}
          </a>
        </nav>

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
        <nav className="border-t border-slate-200 bg-white px-5 py-4 md:hidden" aria-label="Mobil menü">
          <ul className="flex flex-col gap-1">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-surface"
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
