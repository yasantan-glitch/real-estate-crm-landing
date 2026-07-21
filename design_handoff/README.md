# Handoff: GoDaddy-Style Landing Page Redesign (Emlak CRM Pro)

## Overview
A restyle of the existing Emlak CRM Pro landing page, adopting GoDaddy Web
Hosting's visual language (card/box treatment, pill buttons, pricing-card
pattern) while keeping the site's own brand red (#D71920) instead of
GoDaddy's blue, and keeping 100% of the existing Turkish copy.

## About the Design Files
The bundled file `godaddy-style-landing.dc.html` is a **design reference
built in HTML** — a working prototype showing intended layout, styling, and
interaction, not production code to paste in. The task is to **recreate this
design inside the existing Next.js + Tailwind codebase**
(`real-estate-crm-landing`), reusing its component structure
(`components/*.tsx`), its content source of truth (`content/landing.ts`),
and its theme system (`app/globals.css` + `tailwind.config.ts`) — not by
copying raw HTML/inline styles into the app.

## Fidelity
**High-fidelity.** Colors, spacing, type sizes, card treatments, and the
pricing-card pattern are final as shown. Copy is verbatim from the existing
`content/landing.ts` — no text changed.

## Decision needed: typography
The mockup uses a single font family (Plus Jakarta Sans, weights 400–800)
site-wide for a cleaner GoDaddy-like feel. The current codebase instead
loads three fonts via `next/font/google` in `app/layout.tsx`: **Fraunces**
(display headings only), **Inter** (body/UI), **IBM Plex Mono** (ledger/data
elements). Two options:
1. Keep the existing 3-font system (swap Fraunces headings for bold Inter
   weights to match the mockup's single-family look), **no font loading
   changes needed** — recommended, least risky.
2. Replace with Plus Jakarta Sans site-wide via `next/font/google` (update
   `--font-display` and `--font-body` variables in `layout.tsx`) for an exact
   match to the mockup.
Flag this to the user before implementing; don't decide silently.

## Screens / Sections
The page is a single scrolling document. In source order:

### 1. Header (sticky)
- `position: sticky; top: 0; z-index: 50`. **Important:** the sticky header
  requires no ancestor with `overflow-x: hidden` (or any `overflow` other than
  `visible`) — this broke sticky positioning during prototyping and was fixed
  by removing `overflow-x:hidden` from the page's root wrapper.
- Background: `rgba(255,255,255,0.92)` + `backdrop-filter: blur(10px)`,
  bottom border `1px solid #E5E5E7`.
- Left: 10×10px red square (border-radius 3px) + wordmark "Emlak CRM Pro",
  800 weight, 20px.
- Center: nav links from `content/landing.ts` → `nav.links` (Özellikler,
  Kimler İçin, Paketler, Ek Hizmetler, SSS), 14.5px/600.
  Ledger's existing `nav.cta` renders as the pill CTA button on the right.
- Right: red pill button "Demo Talep Et" → `#demo`, `#D71920` bg, white
  text, hover `#A81419`, `border-radius: 999px`, padding `11px 24px`.

### 2. Hero
- Two-column grid (`1.1fr 0.9fr`, 56px gap). Left: eyebrow pill
  (light-red bg `#FCEBEC`, red text, dot), 52px/800 headline, 18px body copy
  (slate `#475569`), two pill CTAs (red primary "Demo Talep Et", white/
  outlined secondary "Paketleri İncele"), small trust note below.
- Right: a white rounded-24px card (border `#E5E5E7`, layered shadow) with a
  dark (`#0A0A0A`) header strip ("Örnek portföy kayıtları" + 3 dots), then a
  list of portfolio rows from `hero​Ledger.rows` — each row: property
  type/district/consultant on the left, price + status pill on the right.
  Status pill colors (tone → {bg, color}): `inProgress` → `#FCEBEC`/`#D71920`;
  `pending` → `#F4F4F5`/`#3F3F46`; default (`matched`/`closed`) →
  `#EDEDEE`/`#71717A`.

### 3. Trust strip
Full-width light-gray (`#F7F7F8`) band, centered text: "Sahada
kullanılıyor:" + reference logo/name (`references.logos[0]`, currently text
fallback "Realty World Poyraz Gayrimenkul" — swap in the real SVG logo).

### 4. Problems ("Tanıdık geliyor mu?")
`problems.items` (7) as a responsive card grid (`auto-fit, minmax(260px,1fr)`,
20px gap). White cards, border `#E5E5E7`, radius 18px, subtle shadow, hover
lift (`translateY(-4px)` + larger shadow).

### 5. Solution ("Çözüm") — dark section
Full-bleed `#0A0A0A` background. `solution.items` (7) in a bordered grid of
dark cards (`#18181B`) separated by 1px `#27272A` lines (grid-gap acting as
divider), each with a small red icon square, white heading, gray body text
(`#A1A1AA`).

### 6. Product preview ("Ürünü görün") — slideshow
Auto-advancing (5s interval) crossfading slideshow, 3 slides sourced from
`productPreview.slides` / the 3 files in `public/screenshots/`:
1. `product-preview-1.webp` — "Portföyünüz, şehir haritasının üzerinde."
2. `product-preview-2.webp` — "Ofisin tamamı, tek bakışta."
3. `product-preview-3.webp` — "Müşteri kaynaklarınızı görün."
- Images are absolutely stacked in a 520px-tall rounded-24px frame, each
  with `opacity` crossfading over `transition: opacity 1s ease` (active = 1,
  others = 0).
- Title/subtitle above swap instantly with the slide (not crossfaded).
- Title is forced to one line: `white-space: nowrap`, 30px/800, container
  `max-width: 820px` (wider than the 640px used elsewhere so the longest
  title — "Portföyünüz, şehir haritasının üzerinde." — never wraps).
- Below the image: a dot pager (one per slide) — active dot widens to 28px
  and turns red (`#D71920`); inactive dots are 8px, `#D4D4D8`. Clicking a dot
  jumps to that slide and resets the timer.

### 7. Features ("Özellikler")
Light-gray full-bleed band. `features.items` (16) in a 3–4 col responsive
grid of small white cards, each with a circular check-icon badge (light-red
bg, red check) + 15px/700 title + 13.5px muted body.

### 8. Audience ("Kimler için")
`audience.items` (6), plain-bordered cards (no fill), hover: border turns
red + lifts.

### 9. Pricing ("Paketler") — GoDaddy pricing-card pattern, dark section
Full-bleed `#0A0A0A`. 3 cards from `pricing.tiers`, `auto-fit,
minmax(300px,1fr)`, 24px gap:
- Non-featured tiers (Başlangıç, Kurumsal): dark card (`#18181B`), border
  `#27272A`.
- Featured tier (Profesyonel, has `badge`): **red card** (`#D71920` bg,
  border `#D71920`), floating red badge pill above the card
  ("En çok tercih edilen kurgu"), `transform: scale(1.04)`, stronger red
  glow shadow.
- Each card: target audience line, tier name (22px/800), small red-tint
  discount-note pill, struck-through `originalPrice`, large `discountedPrice`
  (38px/800), optional `customQuoteNote`, full-width pill CTA ("Demo ve
  Teklif Al" → `#demo`; black button on the red featured card, red button on
  dark cards), divider line, then a checklist of `features[]` with a small
  circular check icon (white check on translucent white bg on the featured
  card; white check on `#3F3F46` circle elsewhere).

### 10. Services ("Ek profesyonel hizmetler")
`services.items` (11), simple bordered/light-gray-fill cards in a responsive
grid.

### 11. Trust reasons ("Neden bu sistem")
Light-gray band, `trust.items` (3) as 3 white shadowed cards.

### 12. FAQ ("SSS")
`faq.items` (11 in the shipped mockup — the full 12 in `content/landing.ts`
should all be included in the real build), accordion pattern: each row is a
button (question, 15.5px/700) + a circular "+" icon that rotates 45° to "×"
when open; only one item open at a time (`faqOpen` index state, click again
to close). Answer text (14.5px, muted) reveals below when open, no
animation on height in the prototype — a real build should add a smooth
height transition.

### 13. Demo form ("Demo talebi") — dark section
Full-bleed `#0A0A0A`, two-column: left = eyebrow/heading/intro/KVKK note in
white/gray text; right = white rounded-24px card containing the real
`DemoForm` fields (Ad Soyad, Firma Adı, Telefon, E-posta, Şehir, Danışman
Sayısı select, Mesaj textarea) laid out 2-up in a grid, red full-width pill
submit button. **This section must use the existing `DemoForm.tsx` logic**
(validation, submit handler, success/error states) — the mockup only shows
the static field layout/styling.

### 14. Footer — dark section
- 3-column grid: brand block (logo mark + wordmark + tagline) | "Ürün"
  links | "Hizmetler" links, all from `footer.columns` / hand-authored nav
  arrays.
- Bottom bar: 3-column flex/grid row —
  - Left: "© 2026 Emlak CRM Pro. Tüm hakları saklıdır."
  - **Center: the Tan Yasan logo alone** (image, ~22px tall,
    `assets/tanyasan-logo.avif` in this bundle), wrapped in a link to
    `https://www.tanyasan.com` (`target="_blank" rel="noopener"`) — logo
    only, no text next to it.
  - Right: separate text link "Web Tasarım by Tan Yasan", same destination
    (`https://www.tanyasan.com`), 12.5px, muted gray (`#52525B`).

## Interactions & Behavior
- **Sticky header**: stays pinned on scroll (see note under Header above
  re: overflow ancestor requirement).
- **Slideshow**: auto-advances every 5000ms; manual dot click jumps + resets
  the interval; crossfade via opacity transition, 1s ease.
- **FAQ accordion**: single-open-at-a-time; click toggles; icon rotates.
- **Hover states**: card lift on problem/audience cards; link color
  `#D71920` → `#A81419` on hover (apply this pair as the site-wide default
  link hover, including footer/nav links that don't have one yet).
- **Demo form**: wire to the existing `/api/demo-request` endpoint and
  `DemoForm.tsx` validation/submit logic — do not resubmit the static mockup
  markup as-is.

## State Management
- `faqOpen: number` — index of the currently open FAQ item (-1 = none).
- `slide: number` (0–2) — current product-preview slide; advanced by a
  5s `setInterval`, cleared on unmount; settable directly by dot click.

## Design Tokens
**Colors**
- Ink / text: `#0A0A0A` (headings/dark bg), `#18181B` (soft dark panel),
  `#27272A` (dark dividers/borders), `#334155` (nav text), `#475569` (hero
  body), `#64748B` / `#71717A` (muted body copy), `#94A3B8` (faint captions),
  `#E5E5E7` / `#E2E8F0` (light borders), `#F4F4F5` / `#F7F7F8` (light
  section backgrounds).
- Accent (brand red, unchanged from current site): `#D71920` (accent),
  `#A81419` (accent hover), `#FCEBEC` (light red tint for badges/pills),
  `#F87171` (lighter red for eyebrows on dark backgrounds).
- On-dark text: `#fff` (headings), `#A1A1AA` (body on dark), `#D4D4D8`
  (feature list text on dark pricing cards).

**Typography** (mockup uses Plus Jakarta Sans everywhere — see Decision
above): headline 52px/800, section h2 36px/800, tier price 38px/800, tier
name 22px/800, body 14.5–18px/400–600, eyebrow labels 12.5px/700 uppercase
`letter-spacing: 0.08em`.

**Radii / shadows**
- Cards: `border-radius: 16–24px`. Buttons/pills/badges: `border-radius:
  999px`.
- Card shadow (light cards): `0 1px 2px rgba(15,23,42,.04), 0 16–30px
  40–70px -12–24px rgba(15,23,42,.12–.2)`.
- Featured pricing card shadow: `0 30px 60px -20px rgba(215,25,32,0.5)`.

## Assets
- `assets/product-preview-1.webp`, `-2.webp`, `-3.webp` — copied unchanged
  from `public/screenshots/` in the source repo (real product screenshots,
  not placeholders).
- `assets/tanyasan-logo.avif` — the Tan Yasan design-credit logo mark,
  provided by the user.
- Reference logo (`references.logos[0]`, Poyraz Gayrimenkul SVG) is **not**
  in this bundle — pull it from `public/logos/` in the source repo.

## Files
- `godaddy-style-landing.dc.html` — the full design reference (single file,
  inline-styled, includes the logic described above). Open directly in a
  browser to view/interact with it.
- `screenshots/01-section.png` … `08-section.png` — full-page screenshots
  taken top to bottom (header/hero → footer), for quick visual reference
  without opening the HTML file.
