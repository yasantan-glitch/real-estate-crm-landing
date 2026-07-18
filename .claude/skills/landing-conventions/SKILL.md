---
name: landing-conventions
description: Architecture rules for the real-estate-crm-landing repository (brand-agnostic Turkish SaaS landing page). Use whenever writing or editing code, copy, styles, or configuration in this repository.
---

# Landing Page Conventions (real-estate-crm-landing)

Brand-agnostic marketing site. Stack: Next.js 15 (App Router) + TypeScript +
Tailwind CSS 3. Runtime deps are ONLY next/react/react-dom — do not add libraries
without explicit approval.

## Content & brand separation (core rule)

1. **All Turkish marketing copy lives in `content/landing.ts`** as data arrays.
   Components contain ZERO hardcoded marketing text. Changing the message =
   editing that one file.
2. **All brand values live in `config/site.ts`** (productName, companyName,
   domain, contacts, SEO strings, tracking IDs, form endpoint). Placeholders like
   `[CRM_PRODUCT_NAME]` stay until the final brand is decided. Never hardcode a
   brand value in a component.
3. **Theme colors are CSS variables in `app/globals.css`** (RGB triplets consumed
   by tailwind.config.ts). Never use raw hex colors in components; use the
   `brand` / `accent` / `surface` / `muted` Tailwind tokens.

## Language rules

- Public-facing copy: Turkish only (technical loanwords like CRM, demo, pipeline
  are fine).
- Code, comments, docs, commit-adjacent text: English.

## Component rules

- One component per landing section; `app/page.tsx` is composition only.
- Server components by default. `"use client"` only where interaction requires it
  (currently Header menu + DemoForm) — keep it that way.
- New section = new component in `components/` + a new export in
  `content/landing.ts`. Follow the SectionHeading + `.section` / `.card` / `.btn-*`
  utility pattern from globals.css.

## Demo form contract

- Form POSTs JSON to `siteConfig.demoFormEndpoint` (default `/api/demo-request`).
- Delivery logic is isolated in `deliverLead()` in
  `app/api/demo-request/route.ts` (Resend if `RESEND_API_KEY` set, log fallback
  otherwise). Future CRM integration replaces ONLY `deliverLead()` — the frontend
  contract (field names, `source` field, `{ ok: boolean }` response) must not change.
- Validation messages are Turkish and come from `content/landing.ts`.

## Honesty constraints

- No fake testimonials, invented customer names, or made-up success metrics.
- Feature claims must mirror what RealtyWorld-CRM actually implements; when in
  doubt, ask before adding a claim to `content/landing.ts`.

## SEO

- Metadata is generated from `config/site.ts` in `app/layout.tsx`;
  robots/sitemap via `app/robots.ts` / `app/sitemap.ts`. Do not duplicate
  metadata elsewhere. Future pages get added to `sitemap.ts` (marked spot).

## Scope discipline

- Single-task changes only; no dependency additions, no design-system rewrites,
  no framework upgrades unless explicitly requested.
