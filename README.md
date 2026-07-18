# Real Estate CRM — SaaS Landing Page (Brand-Agnostic)

Conversion-focused, single-page marketing site for a Türkiye-market real estate CRM.
All public copy is Turkish; all code, docs, and comments are English.
The brand (product name, company, domain, colors, contacts, tracking IDs, form endpoint)
is fully configurable and intentionally undecided.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 3 (theme via CSS variables)
- No UI library, no extra runtime dependencies
- Vercel-ready (API route for the demo form runs as a serverless function)

## Project structure

```
app/
  layout.tsx            # SEO metadata, fonts, GA/GTM/Meta Pixel placeholders, JSON-LD
  page.tsx              # Section composition only
  globals.css           # THEME: CSS variables (colors, fonts) + shared utility classes
  robots.ts sitemap.ts  # SEO endpoints
  api/demo-request/     # Lead endpoint (Resend or log fallback)
components/             # One component per landing section (no copy inside)
config/site.ts          # SINGLE SOURCE for brand, contacts, SEO, tracking, endpoints
content/landing.ts      # ALL Turkish marketing copy as data arrays
docs/STRATEGY.md        # Positioning, packages, ads copy, funnel, SEO clusters
```

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (verified)
```

## Rebranding checklist (when the final brand is decided)

1. `config/site.ts` — productName, companyName, domain, contactEmail, contactPhone,
   socialLinks, siteUrl, SEO titles/descriptions.
2. `app/globals.css` — `--color-brand`, `--color-accent` (RGB triplets). Optionally
   swap the Google Fonts link in `app/layout.tsx`.
3. `.env` — `NEXT_PUBLIC_SITE_URL` = final domain.
4. Add a real logo to `public/` and replace the letter-mark in `Header.tsx`/`Footer.tsx`.
5. Add `public/og-image.png` (1200×630) and reference it in `layout.tsx` openGraph.

No component contains a hardcoded brand value; nothing else needs to change.

## Demo form delivery

The form POSTs JSON to `siteConfig.demoFormEndpoint` (default `/api/demo-request`).

- **Zero config:** leads are logged to Vercel function logs (works immediately).
- **Recommended MVP:** set `RESEND_API_KEY`, `DEMO_NOTIFY_TO`, `DEMO_NOTIFY_FROM`
  → each lead arrives as an email with reply-to set to the prospect.
- **External provider:** set `NEXT_PUBLIC_DEMO_FORM_ENDPOINT` to a Formspree/HubSpot
  URL — the client posts there directly, the API route is bypassed.
- **Future CRM integration:** extend `deliverLead()` in
  `app/api/demo-request/route.ts` to insert into the CRM's Supabase `leads` table.
  The frontend contract does not change.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | prod | Canonical URL / sitemap / OG |
| `RESEND_API_KEY` | no | Enables email delivery of leads |
| `DEMO_NOTIFY_TO` | with Resend | Where lead emails go |
| `DEMO_NOTIFY_FROM` | with Resend | Verified sender |
| `NEXT_PUBLIC_DEMO_FORM_ENDPOINT` | no | Override form target (Formspree etc.) |
| `NEXT_PUBLIC_GA_ID` | no | GA4 (renders only when set) |
| `NEXT_PUBLIC_GTM_ID` | no | Google Tag Manager |
| `NEXT_PUBLIC_META_PIXEL_ID` | no | Meta Pixel |

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Vercel → New Project → import repo (framework auto-detected: Next.js).
3. Add environment variables above (all optional for first deploy).
4. Deploy. Attach the final domain later under Project → Domains; then update
   `NEXT_PUBLIC_SITE_URL` and redeploy.

## Expanding to multi-page later

Sections already map 1:1 to future routes: create `app/ozellikler/page.tsx` etc.
and reuse the same section components; move nav links from `#anchors` to routes
in `content/landing.ts`. `sitemap.ts` has a marked spot for the new URLs.
