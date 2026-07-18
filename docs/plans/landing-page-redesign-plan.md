# Landing Page Redesign Plan — Premium B2B SaaS Direction

Status: planning only, no code written yet.
Scope: marketing site only (`app/`, `components/`, `content/landing.ts`, `config/site.ts`, `app/globals.css`, `tailwind.config.ts`). CRM application code is out of scope entirely.

---

## 0. Repository Audit — Confirmed Facts

A full repository audit (including `src/app/`, `sections/`, `prototypes/`, `templates/`, `archive/`, `backup/`, `public/`, `docs/`, and git history) found **no duplicate implementation, prototype, or abandoned component set**. `lib/` and `public/` are empty placeholders; there is no `.git` history to mine. The following facts are now locked in and govern every section below:

- **One active implementation.** `app/page.tsx` composing 12 components is the only landing page. This plan is a **refactor of that implementation, not a rebuild.**
- **Preserve `content/landing.ts` and `config/site.ts` as-is.** The content/brand separation architecture is correct and stays; only additive data entries are allowed (new ledger/pipeline row data), no restructuring of existing exports.
- **Preserve the demo form API contract exactly.** `app/api/demo-request/route.ts` is **not to be modified** — field names, `source` field, and `{ ok: boolean }` response shape are untouched. `DemoForm.tsx` may only change presentational markup around the existing fields/logic.
- **Preserve SEO, JSON-LD, analytics, robots, and sitemap infrastructure.** `app/robots.ts`, `app/sitemap.ts`, the `metadata` export and JSON-LD block in `app/layout.tsx`, and the GTM/GA4/Meta Pixel script wiring all stay functionally identical. `app/layout.tsx` is touched **only** for the font-loading mechanism (see §12) — metadata, structured data, and analytics blocks are copied through unchanged.
- **Reuse existing components wherever the visual direction allows it**; rewrite markup only where the card-grid/dashboard-mockup pattern is actually being replaced. Several components (`SectionHeading`, `PricingSection`, `DemoForm`, `Header`, `Footer`) need restyling only, not restructuring.
- **Font loading correction:** `app/layout.tsx` currently loads Sora + IBM Plex Sans via runtime `<link>` tags in `<head>` (Google Fonts CSS2 endpoint), not `next/font/google`. This is an explicit migration target, not an assumption — see §12.

---

## 1. Current Repository Assessment

**Stack** — Next.js 15 App Router + TypeScript + Tailwind 3. No runtime deps beyond next/react/react-dom, per `landing-conventions`. Copy lives in `content/landing.ts` (376 lines, fully in Turkish, well organized by section). Brand values live in `config/site.ts`. Theme tokens are CSS variables in `app/globals.css`, consumed as Tailwind `brand` / `accent` / `surface` / `muted` tokens.

**Page composition** (`app/page.tsx`): Header → Hero → ProblemSection → SolutionSection → FeaturesSection → AudienceSection → PricingSection → ServicesSection → TrustSection → DemoForm → FAQ → Footer. 11 sections, one form, one header, one footer — 12 components total, ~800 lines of component code.

**Current visual system** (`app/globals.css`, `tailwind.config.ts`):
- `--color-brand`: dark navy `#0F1B2D` (used as text color AND dark panel background — dual role)
- `--color-brand-soft`: lighter navy `#1E304C` for panel fills
- `--color-accent`: orange-red `#F2542D`
- `--color-surface`: light gray `#F6F8FA`
- Fonts: Sora (display) + IBM Plex Sans (body), loaded via runtime `<link>` tags in `app/layout.tsx` `<head>` — both fairly generic "SaaS default" grotesk pairings, and not self-hosted/optimized via `next/font`
- Shared utility classes: `.section`, `.eyebrow`, `.h2`, `.card`, `.btn-primary/secondary/dark`

**Content quality**: The Turkish copy is genuinely strong — specific, field-accurate pain points ("3+1, en fazla 8 milyon" diyen müşteri aradıktan iki hafta sonra başka ofisten alıyor"), honest positioning (`trust.title`: "Satış vaadi değil, saha gerçeği"), no fabricated testimonials or metrics (already compliant with the honesty constraint). This copy is **reused as-is**; the redesign is a visual/structural pass, not a copy rewrite, except where new sections require new additive content entries.

**Component pattern**: Every content-heavy section (`FeaturesSection`, `ProblemSection`, `SolutionSection`, `AudienceSection`, `ServicesSection`, `TrustSection`) follows the same shape: `SectionHeading` + a responsive grid of bordered `.card` boxes. Six of eleven sections use the identical grid-of-cards layout, which is the core structural problem described below.

---

## 2. Existing Design Weaknesses

1. **Navy-and-orange palette reads as generic SaaS**, not as a considered brand. Navy-panel-with-orange-accent is one of the most common default B2B SaaS palettes. It doesn't say "real estate" or "professional Turkish CRM" specifically — it could be any product.
2. **Card overload.** 6 of 11 sections are `SectionHeading` + grid-of-cards with no other structural device. Features alone renders 16 nearly-identical bordered boxes. This is exactly the pattern the constraints ask to move away from — it reads as templated, not designed.
3. **Hero mockup is a generic dashboard cliché.** `DashboardMockup` in `Hero.tsx` is a dark rounded panel with KPI tiles + kanban-style pipeline cards + a blurred accent glow (`blur-3xl` circle) in the corner — the exact "AI-generated SaaS hero" pattern the brief explicitly wants avoided.
4. **`brand` token is overloaded.** Navy is used simultaneously as body text color proxy, dark panel background, and implied "trust" color — conflating three jobs in one variable makes the palette hard to control.
5. **No signature visual moment.** Nothing on the page is memorable or specific to real estate operations. The dashboard mockup is the closest attempt but it's a generic kanban, not something distinctive to this subject.
6. **Typography is a neutral delivery vehicle.** Sora + IBM Plex Sans is a safe, common pairing with no point of view; type scale is a single `.h2` utility with no distinct display treatment for hero vs. section headings; fonts aren't even self-hosted via `next/font`.
7. **Accent orange (`#F2542D`) is not the requested "controlled red."** It reads as an energetic marketing orange, not a disciplined, restrained red suited to a serious B2B financial/operations tool.
8. **Section rhythm is flat.** Every section uses the same `.section` max-w-6xl / py-16-24 container with alternating `bg-white` / implicit `bg-surface` — no variation in density, no full-bleed moment.
9. **Mobile is default-responsive, not mobile-considered.** Grids collapse via standard Tailwind breakpoints but nothing was clearly designed mobile-first.

---

## 3. Proposed Visual Direction

Applying the `frontend-design` token method: color, type, layout, signature.

### Color — "Ledger" palette (4 named values, all in `app/globals.css` as RGB triplets)

| Token | Hex | Role |
|---|---|---|
| `--color-ink` | `#0A0A0A` | Primary text, headlines — near-black, not navy. Replaces `brand` as the text color. |
| `--color-ink-soft` | `#52525B` (zinc-600) | Secondary/body text |
| `--color-rule` | `#E4E4E7` (zinc-200) | Borders, hairline dividers — used instead of card shadows |
| `--color-accent` | `#B91C2E` | Controlled signal red — closer to a registry stamp / official seal than a marketing CTA orange. Desaturated enough to feel institutional, not alarmist. |
| `--color-accent-hover` | `#8F1524` | Pressed/hover state |
| `--color-surface` | `#FAFAFA` | Section alternation only — near-white, not a colored panel |

Dropped entirely: navy `brand`/`brand-soft` as a background-panel color, any purple, any gradient. Black is used deliberately and sparingly — full black (`#0A0A0A`) appears as *text* and as *one* solid full-bleed section, never as a decorative background wash.

### Type — three families, strict job separation

- **Display — Fraunces**, used **only** for selected editorial headings (H1 hero headline, H2 section headings, the eyebrow's companion headline moments). Loaded via `next/font/google`, light/soft optical weight, tight tracking. This is the one deliberate risk: a serif display against an otherwise all-grotesk B2B page signals "institutional, paper-trail credibility" rather than "generic startup."
- **Body — Inter**, used for **all** primary UI and body typography: paragraphs, nav links, buttons, form labels/inputs, card copy, footer text. Loaded via `next/font/google`.
- **Utility — IBM Plex Mono**, used **only** for ledger/data/status elements: the Ledger Strip's row numbers and figures, pricing numerals, phone-number formatting inside the demo form, small status tags (e.g., "Eşleşti"). **Never used for headings or body copy** — mono is a data marker, not a display face.

Type scale: hero H1 at `text-5xl md:text-7xl` `font-light` Fraunces; section H2 at `text-3xl md:text-5xl` same family; body at `text-base md:text-lg` Inter with generous `leading-relaxed`; mono data elements at `text-xs`–`text-sm` with `tracking-wide`.

### Layout concept

Replace "card grid for everything" with three distinct structural devices used deliberately, not interchangeably:

1. **Rule-separated list rows** (hairline `border-t border-rule`, no box, no shadow) for content that is genuinely a flat list — features, FAQ. This is the primary anti-card-overload move.
2. **Two-column editorial blocks** (label/number left, prose right) for content that has real narrative weight — problem framing, solution framing, trust section.
3. **One full-bleed black section** — the single dark moment on the page — for the pipeline/ledger signature visual, and again (in a smaller, quieter form) for the demo form. Everywhere else stays white or `--color-surface` near-white.

ASCII wireframe, hero:

```
┌─────────────────────────────────────────────┐
│  logo                    nav …      [Demo]   │  ← thin bottom rule, no shadow
├─────────────────────────────────────────────┤
│  EYEBROW (mono, red, tracked)                │
│                                               │
│  Emlak ofisinizin tamamı,                    │  ← Fraunces light, huge
│  tek CRM panelinde.                          │
│                                               │
│  Subheadline paragraph, max-w-xl, Inter.     │
│                                               │
│  [ Demo Talep Et ]   Paketleri incele →      │
│  ───────────────────────────────────────     │
│  full-width hairline-bordered LEDGER STRIP   │  ← signature element (§ below)
│  001  Konyaaltı 3+1     8.500.000 ₺   Eşleşti│
│  002  Muratpaşa Dükkan  Teklif alındı  ●     │
│  003  Döşemealtı Villa  Yer gösterme   ●     │
└─────────────────────────────────────────────┘
```

Card usage is not eliminated — pricing tiers genuinely benefit from a bounded card (comparison object), and that's the one place a 3-up card layout stays. Everywhere else moves to rows or two-column blocks.

### Signature element — "the Ledger Strip"

A full-width, hairline-ruled, monospace (IBM Plex Mono) data strip that looks like a page torn from a brokerage's operational register — row number, listing/deal label, one key figure, one status mark — rendered black-on-white (hero, under the fold) and inverted white-on-black (as the one full-bleed dark section, showing the sales pipeline stages as ledger rows instead of kanban cards). Status marks use the red accent exclusively (a small filled dot or a stamp-style "✓ Eşleşti" tag) — red never appears as a background fill, only as a precise mark. This replaces the current KPI-tile/kanban dashboard mockup and is the one non-generic, subject-specific visual on the page.

### What this rules out (explicit self-check against the brief)
- No purple, no gradients anywhere (current `blur-3xl` accent glow is removed).
- No glassmorphism (no translucent/blurred panels).
- No stock "AI SaaS" hero dashboard mockup with rounded KPI tiles — replaced by the ledger strip.
- No excessive cards — cards survive only for pricing tiers; everything else uses rules or editorial two-column blocks.
- No mono type in headings or body copy — mono is reserved for ledger/data/status elements only.
- White background stays the dominant field; black is confined to text and exactly one full-bleed section + demo form.

---

## 4. Section Architecture

Reordered/restructured from the current 11-section flow. Kept sections marked `(kept)`, restructured ones marked `(restructured)`, new ones marked `(new)`.

1. **Header** (kept, restyled) — logo wordmark in Fraunces, Inter nav links, black text on white, thin bottom rule instead of shadow.
2. **Hero** (restructured) — headline/subhead/CTA + Ledger Strip signature visual replacing the dashboard mockup.
3. **ProblemSection** (restructured) — from 7-item card grid to a two-column editorial block: left = short framing statement, right = the 7 pain points as rule-separated rows.
4. **SolutionSection** (restructured) — mirrors ProblemSection's rhythm but inverted (right = framing, left = rows), keeping the problem→solution visual echo without repeating the same layout twice in a row.
5. **Full-bleed Pipeline strip** (new, black section) — the inverted ledger visual, showing the sales pipeline stages (İlk Temas → Yer Gösterme → Pazarlık → Kapanış) as a single horizontal ruled sequence with red status marks.
6. **FeaturesSection** (restructured) — 16 items as a dense 2-column rule-separated list (mono index left, description right), not a 4-up card grid.
7. **AudienceSection** (kept, restyled) — 6 items; short enough to stay as a light-weight row list with a small mono index, not cards.
8. **PricingSection** (kept, restyled — the one card exception) — 3 tiers as bordered cards, restyled: black text, hairline red top border on the "Profesyonel" (recommended) tier only, no shadow-heavy elevation.
9. **ServicesSection** (restructured) — 11 optional/add-on services as a compact 2-column row list, visually quieter than Features (smaller type, `ink-soft` color).
10. **TrustSection** (restructured) — 3 items become a short editorial triptych (three short columns of prose, no boxes) directly above the demo form.
11. **DemoForm** (kept, restyled) — moved onto a full-bleed black section treatment (dark surface, white labels, red submit button) so the conversion moment visually stands out. Form fields, validation, and submit logic are unchanged — presentation only.
12. **FAQ** (restructured) — from generic accordion-in-cards to rule-separated `<details>` rows.
13. **Footer** (kept, restyled) — black text on white or on `--color-surface`, no navy panel.

Net effect: only Header/Footer/Pricing/DemoForm break from "white section, black text, hairline rules"; those four are the deliberate variation points.

---

## 5. Component Plan

New shared primitives (add to `components/`, follow existing "one export per component" + Server Component default pattern). New components are added **only where they create real reusable value across multiple sections** — `LedgerStrip` is the priority new primitive since it's the signature element used twice; `RuleList` and `EditorialSplit` are added because they replace a repeated pattern across five components each, not for a single use.

- **`LedgerStrip.tsx`** (new — highest-value addition) — the signature visual. Props: `rows`, `variant: "light" | "dark"`. Used in Hero (light) and the new Pipeline section (dark). Pure presentational, data passed in from `content/landing.ts` (new `ledgerHero` / `pipelineStages` exports) so it stays copy-agnostic per the content/brand separation rule. Uses `font-mono` (IBM Plex Mono) internally for row numbers/figures — never for surrounding headings.
- **`RuleList.tsx`** (new) — generic rule-separated row list replacing the repeated "grid of `.card`" pattern. Props: `items: { index?, title, text }[]`, `density: "default" | "compact"`. Used by ProblemSection, SolutionSection (rows half), FeaturesSection, AudienceSection, ServicesSection — five call sites justify a shared component.
- **`EditorialSplit.tsx`** (new) — two-column framing/rows layout wrapper used by ProblemSection and SolutionSection, with a `reverse` prop to alternate which side holds the framing copy. Two call sites, but the mirrored-layout logic (reverse prop) is non-trivial enough to warrant extraction rather than duplicating in both components.
- **`SectionHeading.tsx`** (kept, restyled) — swap `.h2` styling to Fraunces light + tracked mono eyebrow; no structural change needed.
- **`Hero.tsx`** (rewritten) — remove `DashboardMockup`, compose headline block + `LedgerStrip`.
- **`ProblemSection.tsx` / `SolutionSection.tsx`** (rewritten) — compose `EditorialSplit` + `RuleList`.
- **`FeaturesSection.tsx` / `AudienceSection.tsx` / `ServicesSection.tsx`** (rewritten) — compose `SectionHeading` + `RuleList` instead of card grid.
- **`PricingSection.tsx`** (restyled only, structure kept) — card markup stays, restyle border/accent per §3.
- **`TrustSection.tsx`** (rewritten) — triptych prose layout, no `RuleList`/cards.
- **`FAQ.tsx`** (rewritten) — `<details>`/`<summary>` rows with rule dividers, dropping card wrapper.
- **`DemoForm.tsx`** (restyled only, logic kept) — wrap existing form fields in the dark full-bleed section shell; field names, validation, and the POST/response contract are untouched.
- **`Header.tsx` / `Footer.tsx`** (restyled only) — token swap, no structural rewrite needed beyond removing navy panel classes.

`app/page.tsx` gains one new composition line for the Pipeline strip section; otherwise stays composition-only per convention.

---

## 6. Mobile Strategy

Designed mobile-first, not just responsive-collapsed:

- **Ledger Strip**: on mobile, rows drop the "figure" column and show only index + label + status mark (2 lines per row max); the dark pipeline variant scrolls horizontally as a single ruled strip with `snap-x` rather than stacking 4 full-width blocks.
- **RuleList**: single column by default (mobile), 2-column only from `md:` up — no information density forced at phone width; index numbers stay in mono for scannability at small sizes.
- **EditorialSplit**: framing copy stacks above rows on mobile (never side-by-side below `md:`).
- **Type scale**: hero H1 steps from `text-4xl` (mobile) → `text-7xl` (desktop) explicitly, not left to a single fluid clamp.
- **CTA placement**: primary "Demo Talep Et" button stays full-width and thumb-reachable near the top of the viewport on mobile hero — CTA-first, then supporting visual, on narrow screens.
- **Pricing cards**: stack vertically with the recommended tier ("Profesyonel") reordered first on mobile via `order-first md:order-none`.
- **Demo form**: single-column fields throughout (already effectively true), dark section padding reduced on mobile to avoid an oversized black block before the fold.
- All interactive touch targets ≥44px height; verified against existing `.btn` padding (already `py-3`, compliant).

---

## 7. Conversion Strategy

- **Two CTA tiers kept**, sharpened: primary "Demo Talep Et" (red, high contrast) everywhere it currently appears (hero, pricing, footer), secondary "Paketleri İncele" as a text link with arrow rather than a bordered button.
- **Ledger Strip in the hero doubles as social proof of specificity**: showing real-looking operational rows in the first viewport builds credibility for a B2B buyer faster than an abstract KPI tile grid.
- **Pipeline full-bleed section immediately precedes Features**, giving the reader a mid-page pattern interrupt before the feature list.
- **Trust triptych placed directly above the demo form** — last objection-handling beat before the ask.
- **Demo form gets its own visual weight** (dark full-bleed section) so it reads as "the one thing we want you to do," not just another form block.
- **Recommended pricing tier gets the sole card-level red accent** (hairline top border) — the only place red touches a bounded shape on the whole page.
- **FAQ as rule-rows keeps the page scannable** rather than requiring N accordion clicks inside boxes.
- No new tracking/analytics scope implied here — existing GTM/GA4/Meta Pixel wiring in `app/layout.tsx` is preserved unchanged; `config/site.ts` already has a tracking-ID placeholder pattern if the user wants that separately.

---

## 8. File Impact List

Revised against the audit's confirmed facts — infrastructure files are explicitly locked, not just "unlikely to change."

**Theme / config — modified**
- `app/globals.css` — full token replacement (drop `brand`/`brand-soft` as panel colors, add `ink`/`ink-soft`/`rule`, replace accent hex, add Fraunces/Inter/IBM Plex Mono CSS var wiring for `next/font`, rework `.card`/`.eyebrow`/`.h2` utilities, add rule-list/ledger utility classes if needed).
- `tailwind.config.ts` — mirror new color tokens (`ink`, `rule` in place of/alongside `brand`), add `font-mono` mapping for IBM Plex Mono, map `display`/`body` to Fraunces/Inter.
- `app/layout.tsx` — **font-loading mechanism only**: remove the runtime `<link>` tags for Sora/IBM Plex Sans, replace with `next/font/google` imports for Fraunces, Inter, IBM Plex Mono (see §12). The `metadata` export, JSON-LD `jsonLd` block, and GTM/GA4/Meta Pixel `<Script>` wiring are copied through byte-for-byte.

**New components — added**
- `components/LedgerStrip.tsx`
- `components/RuleList.tsx`
- `components/EditorialSplit.tsx`

**Rewritten components — markup/structure changes**
- `components/Hero.tsx`
- `components/ProblemSection.tsx`
- `components/SolutionSection.tsx`
- `components/FeaturesSection.tsx`
- `components/AudienceSection.tsx`
- `components/ServicesSection.tsx`
- `components/TrustSection.tsx`
- `components/FAQ.tsx`

**Restyled only — token/class changes, no structural rewrite**
- `components/SectionHeading.tsx`
- `components/PricingSection.tsx`
- `components/DemoForm.tsx` (presentation shell only — internal form logic untouched)
- `components/Header.tsx`
- `components/Footer.tsx`

**New section wiring**
- `app/page.tsx` — insert new Pipeline strip section component between the Solution/Problem block and FeaturesSection.
- `content/landing.ts` — **additive only**: new data exports for the ledger strip (`ledgerPreview` hero rows) and pipeline strip (`pipelineStages`). No existing export is restructured or removed; existing copy strings are reused verbatim in `RuleList`/`EditorialSplit` props.

**Explicitly locked — must not be modified**
- `app/api/demo-request/route.ts` — lead delivery contract, per direct instruction.
- `config/site.ts` — brand/contact/SEO/tracking values; only consumed, never edited, by this redesign.
- `app/robots.ts`, `app/sitemap.ts` — no visual/content dependency.
- `metadata` export, JSON-LD block, and analytics `<Script>` tags inside `app/layout.tsx` (the file itself is touched only for font loading, as above).

---

## 9. Implementation Phases

Sequenced so the site stays deployable and visually coherent at the end of each phase (no half-migrated palette in production).

**Phase 1 — Foundation (tokens + fonts, no component rewrites)**
- Migrate `app/layout.tsx` font loading from runtime `<link>` tags to `next/font/google` (§12).
- Replace color tokens in `app/globals.css` and `tailwind.config.ts` (ink/ink-soft/rule/accent/surface).
- Update shared utilities (`.eyebrow`, `.h2`, `.card`, `.btn-*`) to the new tokens/fonts.
- At the end of this phase the existing component markup renders in the new palette/type even though layout devices haven't changed yet — a safe intermediate checkpoint.

**Phase 2 — Signature primitive**
- Build `LedgerStrip.tsx` in isolation against mock/sample row data.
- Add `ledgerPreview` and `pipelineStages` exports to `content/landing.ts` (additive).
- Integrate into `Hero.tsx` (light variant), replacing `DashboardMockup`.

**Phase 3 — Shared list/editorial primitives**
- Build `RuleList.tsx` and `EditorialSplit.tsx`.
- Migrate `FeaturesSection.tsx`, `AudienceSection.tsx`, `ServicesSection.tsx` to `RuleList`.
- Migrate `ProblemSection.tsx`, `SolutionSection.tsx` to `EditorialSplit` + `RuleList`.

**Phase 4 — New section + remaining rewrites**
- Add the full-bleed Pipeline strip section (dark `LedgerStrip` variant) and wire it into `app/page.tsx`.
- Rewrite `TrustSection.tsx` (triptych) and `FAQ.tsx` (rule-separated `<details>`).

**Phase 5 — Restyle-only components**
- `Header.tsx`, `Footer.tsx`, `SectionHeading.tsx`, `PricingSection.tsx`, `DemoForm.tsx` shell — token/class updates only, verify no change to `DemoForm`'s internal logic or the API contract.

**Phase 6 — Cross-cutting QA**
- Mobile-first pass per §6 across every section.
- Accessibility check (focus states, contrast of `--color-ink` on white and white-on-black sections, reduced-motion).
- Full-page visual review against §3's "what this rules out" checklist.

---

## 10. Risk List

| Risk | Impact | Mitigation |
|---|---|---|
| Font migration to `next/font/google` changes fallback/loading behavior (FOUT/CLS) vs. current runtime `<link>` approach | Medium — could shift layout or flash unstyled text differently than today | Use `next/font/google`'s built-in `display: "swap"` and size-adjust defaults; verify CLS visually in Phase 1 before proceeding to component work |
| Removing `--color-brand` navy breaks any component relying on it that isn't in the rewrite list | Medium — silent visual regression | Grep for `brand`/`brand-soft` Tailwind class usage across all components before deleting the token in Phase 1, not after |
| `DemoForm.tsx` restyle accidentally touches field names, validation logic, or fetch call | High — breaks lead delivery silently | Diff `DemoForm.tsx` against its current version before/after Phase 5; the only touched lines should be className/wrapper markup |
| New `content/landing.ts` exports (`ledgerPreview`, `pipelineStages`) drift from real CRM feature claims | Medium — violates the honesty constraint already established in the codebase | Base ledger/pipeline row copy on the same field-accurate language already used in `problems`/`solution` exports; no invented metrics |
| Mono (IBM Plex Mono) creeping into headings/body during implementation, since it's visually distinctive and easy to over-apply | Low/Medium — violates explicit constraint | Restrict `font-mono` usage to `LedgerStrip` and clearly-labeled data/status spans only; enforce via component review, not a global class |
| Pipeline full-bleed section adds a new scroll beat not present today | Low — could feel like scope creep on a "refactor not rebuild" | Flagged as an open question (§13) rather than assumed; confirm before Phase 4 |
| Tailwind config token rename (`brand` → `ink`) is a wide-reaching find/replace across 12 components | Medium — mechanical but easy to miss one file | Do the token rename as a dedicated, isolated step in Phase 1 with a full-repo grep verification pass afterward |

---

## 11. Acceptance Criteria

A phase/PR is done when all of the following hold:

**Content & data integrity**
- [ ] `content/landing.ts`'s existing exports are byte-identical except for additive new exports (`ledgerPreview`, `pipelineStages`).
- [ ] `config/site.ts` is unmodified.
- [ ] `app/api/demo-request/route.ts` is unmodified.
- [ ] `DemoForm`'s POST payload shape, field names, and `{ ok: boolean }` response handling are unchanged (verified by re-testing the demo form submit flow end to end).

**Infrastructure integrity**
- [ ] `app/robots.ts` and `app/sitemap.ts` are unmodified.
- [ ] `metadata` export and JSON-LD block in `app/layout.tsx` are unchanged.
- [ ] GTM/GA4/Meta Pixel `<Script>` blocks in `app/layout.tsx` are unchanged and still id-gated.
- [ ] Lighthouse/Core Web Vitals are not regressed by the font migration (compare CLS before/after Phase 1).

**Visual direction compliance**
- [ ] No purple or gradient anywhere in the rendered page.
- [ ] No glassmorphism (blur/translucency) anywhere.
- [ ] No card-grid layout remains for Problem/Solution/Features/Audience/Services/FAQ — only Pricing retains bounded cards.
- [ ] Background is white/near-white (`--color-surface`) everywhere except exactly the Pipeline strip and DemoForm sections (the two full-bleed black moments).
- [ ] `font-mono` (IBM Plex Mono) is used only inside `LedgerStrip` and explicitly labeled data/status elements — zero usage in any `<h1>`–`<h3>` or body `<p>`.
- [ ] Fraunces is used only for display headings (H1/H2), never body copy, buttons, or form labels.
- [ ] Red accent (`--color-accent`) never appears as a full background fill — only as text, borders, or small marks/dots.

**Mobile & accessibility**
- [ ] All sections pass a mobile-first visual review at 375px width (no horizontal overflow, no cramped type below 11px effective size).
- [ ] All interactive elements have visible focus states and ≥44px touch targets.
- [ ] `prefers-reduced-motion` is respected (already present in `globals.css`; verify no new animation bypasses it).

**Structural**
- [ ] `app/page.tsx` remains composition-only (no inline markup beyond component composition).
- [ ] Every new component (`LedgerStrip`, `RuleList`, `EditorialSplit`) is used at ≥2 call sites, per the "add only where reusable" instruction — if a component ends up single-use, it's inlined instead.

---

## 12. Font Migration Steps

Current state: `app/layout.tsx` loads fonts via two `<link rel="preconnect">` tags plus one `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Sora:wght@600;700&display=swap&subset=latin-ext">` inside `<head>`. `app/globals.css` then references `var(--font-display)` / `var(--font-body)`, which are plain CSS `font-family` stacks (not tied to `next/font`) set in `:root`.

Target state: `next/font/google` for all three families, self-hosted at build time, exposed as CSS variables consumed by the existing Tailwind `fontFamily.display` / `fontFamily.body` / new `fontFamily.mono` mapping — no visual-system change beyond the font files themselves.

Steps:

1. **Import the three families in `app/layout.tsx`** using `next/font/google`:
   ```ts
   import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";

   const fraunces = Fraunces({
     subsets: ["latin", "latin-ext"],
     weight: ["300", "400", "500", "600"],
     variable: "--font-display",
     display: "swap",
   });
   const inter = Inter({
     subsets: ["latin", "latin-ext"],
     weight: ["400", "500", "600"],
     variable: "--font-body",
     display: "swap",
   });
   const plexMono = IBM_Plex_Mono({
     subsets: ["latin", "latin-ext"],
     weight: ["400", "500"],
     variable: "--font-mono",
     display: "swap",
   });
   ```
2. **Remove the runtime `<link>` tags** (`preconnect` + `css2?family=...` stylesheet) from `<head>` in `app/layout.tsx` — no other `<head>` content (JSON-LD `<script>`) is touched.
3. **Apply the font variables to `<html>` or `<body>`** via `className={\`${fraunces.variable} ${inter.variable} ${plexMono.variable}\`}` so the CSS variables are available globally, matching how `--font-display`/`--font-body` are already consumed.
4. **Update `app/globals.css`**: remove the old static `--font-display`/`--font-body` `font-family` string values from `:root` (they're now supplied by the `next/font` variable classes instead) — keep the variable *names* the same (`--font-display`, `--font-body`) and add `--font-mono` so `tailwind.config.ts` doesn't need a mapping-key change, only a new `fontFamily.mono` entry.
5. **Update `tailwind.config.ts`**: add `mono: ["var(--font-mono)", "monospace"]` to `theme.extend.fontFamily`, alongside the existing `display`/`body` mappings (which now point at Fraunces/Inter instead of Sora/IBM Plex Sans automatically, since the variable name didn't change).
6. **Verify**: no component references the old font names (`Sora`, `IBM Plex Sans`) directly by string — confirm via grep before removing the old `<link>` tags, since `globals.css` was the only consumer.
7. **Visual/perf check**: compare font-loading waterfall and CLS before/after in devtools (Phase 1 QA step, per §9/§10) — `next/font` should eliminate the external Google Fonts request entirely (self-hosted at build time), which is a net performance improvement, not just a visual swap.

---

## 13. Open Questions Before Implementation

1. Confirm the exact red hex (`#B91C2E` proposed) against any existing brand guideline if a specific red is already mandated elsewhere (e.g. a logo not yet seen).
2. Confirm whether the Pipeline full-bleed section is welcome as a genuinely new section (adds one more scroll beat) or should instead be merged into the existing SolutionSection rather than being fully additive — flagged in §10 as a scope-creep risk against the "refactor, not rebuild" instruction.
3. Confirm Fraunces/Inter/IBM Plex Mono are acceptable as final family choices (vs. e.g. a self-hosted/licensed alternative) before Phase 1 font migration begins, since that phase touches `app/layout.tsx`.
