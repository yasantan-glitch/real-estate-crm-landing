"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { nav } from "@/content/landing";

type NavLink = (typeof nav.links)[number];

function linkByHref(href: string): NavLink {
  const link = nav.links.find((l) => l.href === href);
  if (!link) throw new Error(`nav.desktop references unknown href: ${href}`);
  return link;
}

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

const desktopLinkClass = (active: boolean) =>
  `whitespace-nowrap text-[14.5px] font-semibold transition-colors hover:text-accent ${
    active ? "text-accent" : "text-slate-700"
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a href="/" aria-label={nav.homeLabel} className="flex shrink-0 items-center">
          <Image
            src="/logos/EmlakCRM-Logo.svg"
            alt={siteConfig.productName}
            width={1996}
            height={384}
            className="h-10 w-auto shrink-0"
          />
        </a>

        <nav className="hidden items-center lg:flex lg:gap-6 xl:gap-8" aria-label="Ana menü">
          {nav.desktop.map((item) => {
            const link = linkByHref(item);
            const isActive = isActivePath(pathname, link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={desktopLinkClass(isActive)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a href="/demo-talep" className="btn-primary hidden whitespace-nowrap !px-6 !py-3 !text-[14.5px] lg:inline-flex">
          {nav.cta}
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-brand lg:hidden"
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
        <nav className="border-t border-line bg-white px-5 py-4 lg:hidden" aria-label="Mobil menü">
          <ul className="flex flex-col gap-1">
            {nav.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-md px-3 py-2.5 text-sm font-semibold hover:bg-surface ${
                      isActive ? "text-accent" : "text-slate-700"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2">
              <a href="/demo-talep" className="btn-primary w-full" onClick={() => setOpen(false)}>
                {nav.cta}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
