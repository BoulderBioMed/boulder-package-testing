# Boulder Package Testing — Brand v2 Progress

## Version safety
- V1 snapshot SHA (branch base): `e9db0d18e896859c78dd58ccefd201a37987fc9a`
- Tag: `v1-prebrand` (pushed) · Backup branch: `backup/v1-prebrand` (pushed)
- Work branch: `brand/v2-package-testing`
- **Restore V1:** `git checkout backup/v1-prebrand` (or `git reset --hard v1-prebrand`)
- Production stays on V1 until Jim merges the PR. Never force-push main.

## Brand standard applied
- **Font → Lato** loaded globally via Google Fonts `<link>` in `app/layout.tsx`; `--font-sans` set to Lato in both `:root` and `@theme inline`. System-font-only stack removed.
- **Color tokens** in `app/globals.css`: Boulder Blue `#2968A0` primary, Navy `#0B2545`, Sky Blue `#5B8FC7`, Green `#75D69C` accent, Slate, Ink, Cloud, Boulder Gray, `--radius: 6px`. Retired teal `#3DA9C7` → Boulder Blue everywhere. The existing Tailwind classes `bg-teal` / `text-teal` / `border-teal` now resolve to Boulder Blue because the `--color-teal` token is repointed (no per-class edits needed). `--color-teal-dark` → `#1F5180`.
- **Logo** → shared `components/BoulderLockup.tsx` (Option 2 Medium, locked). The navy header (`components/Nav.tsx`) and navy footer (`components/Footer.tsx`) previously used `/logo-on-dark.svg`; both now use `<BoulderLockup variant="dark" ...>` — **dark** variant chosen (not light) because this site's header/footer are navy, where the dark-variant colors read correctly. Header `word="Package Testing" size={28}`; footer brand col `word="Package Testing" size={38}`; footer family col `word="BioMed" size={26}`.
- **Family bar** (`components/FamilyBar.tsx`, copied from biolabs): navy, standard locked order — BioMed · iQ · Sterilization · RA/QA · BioLabs · Package Testing · Applied AI (all 7). `CURRENT = "Package Testing"` renders Package Testing as the active link to `/`. Added above `<Nav />` in `app/layout.tsx`.
- **Footer family links** rebuilt to the standard 7 order including Boulder Applied AI and the Boulder BioMed hub; current site (Package Testing) renders as an active internal `/` link, others as tracked external links.
- Buttons: `.btn-primary` blue bg / white; `.btn-secondary` transparent / blue text / 1px blue border (added to `globals.css`).
- **Brand mark recolor**: `public/logo.svg`, `public/logo-on-dark.svg`, `public/icon.svg`, and `app/opengraph-image.tsx` had teal `#3DA9C7`; all repointed to Boulder Blue `#2968A0` so any residual reference is palette-consistent. (The header/footer no longer reference the SVGs — they use BoulderLockup — but the files are recolored rather than deleted in case they are linked externally.)
- **Style guide** copied to `docs/brand-style-guide.html`.

## Open items completed
- **/resources articles (8)** — *This was the largest gap.* The `Article` interface had **no body field** and the article template rendered a hardcoded `[CONTENT]` placeholder, so all 8 articles were empty. Added a `body: string[]` field to `content/articles.ts` and wrote **full, real, evidence-led bodies for all 8 articles** (each 7–9 sections with `## ` subheads), then updated `app/resources/[slug]/page.tsx` to render the body. Content is accurate explainer material on public consensus standards (ISO 11607-1/-2, ASTM D4169, ISTA 3A, ASTM F1980 accelerated aging incl. Arrhenius/Q10 math, ASTM F88 peel, ASTM F1140 burst, ASTM F1929 dye penetration, ASTM F2096 bubble leak, ASTM F1886 visual inspection) and is consistent with the facts already in `content/standards.ts` (Q10 2.0, ~52 days/yr at 55 °C, 8–12 wk timelines). **No invented metrics, client names, pass-rates, or Boulder-specific data.** All 8 are listed on `/resources` (existing `articles.map`) and prerender as SSG.
- **Contact form** (`app/api/contact/route.ts`) — now wired to `lib/email.ts` `sendFormEmail`, delivering to **info@boulderiq.com** (Resend HTTP API, no npm dep). Builds a formatted message from the QuoteForm fields (name, email, company, phone, device, standards, timeline) and sets `reply_to` to the submitter. **Existing `console.log` of the submission is KEPT** so nothing is lost when no transport is configured. Graceful no-op until env keys are set.
- **lib/email.ts** copied from biolabs (exports `sendFormEmail` + `FORM_RECIPIENT = "info@boulderiq.com"`).
- **Favicon + OG** — existing `app/favicon.ico` kept (did NOT add a competing `app/icon.tsx`, which would override it). `app/opengraph-image.tsx` recolored to Boulder Blue (teal removed); the `BPT` mark tile is now blue, which is on-brand.
- **Industry "Case Study" stubs removed** — the 4 industry pages (orthopedic, cardiovascular, ivd, dental) each had an explicit *"Anonymized case study placeholder"* section with no real content. Per the no-placeholder rule, these 4 sections were removed. See TODO below to add real case studies when available. (The site's other genuine case-study/work content was left untouched.)

## Acceptance check
- [x] Lato everywhere; no teal (`grep -rinE "3DA9C7|3da9c7|61, ?169, ?199|2A8AA8|2b8aa5" app components lib content` → nothing); primary `#2968A0`, footer/dark `#0B2545`.
- [x] No `Open Sans` (grep → nothing).
- [x] No `lorem ipsum` / `put quotes here` / `[CONTENT]` / case-study placeholder text (grep → nothing). Only remaining `console.log` is the intentional contact-form audit log.
- [x] `Lato` present in `app/layout.tsx` + `app/globals.css`.
- [x] `info@boulderiq.com` present in `lib/email.ts` and wired in the contact route.
- [x] Header logo = BoulderLockup; FamilyBar present (standard 7 order, Package Testing active); footer family links = standard 7 incl. Applied AI + BioMed hub.
- [x] All 8 resources articles have full real bodies and render (SSG).
- [x] `npm run build` succeeds (✓ Compiled, 35/35 static pages generated).

## IMAGES TO GENERATE
None are required for this brand pass — all chrome uses the BoulderLockup text lockup and the OG image is rendered programmatically. The homepage already references one real image that exists in the repo:
- `public/img/sterilization-to-test-transfer.png` — already present and wired on the homepage (chain-of-custody graphic). No action needed.

If a refreshed brand OG raster is ever wanted (the metadata currently points to `/og-image.png`):
- **Filename / location:** `public/og-image.png`
- **Aspect ratio:** 1200 × 630 (1.91:1)
- **Suggested AI prompt:** "Clean, modern medical-device package-testing lab brand banner. Deep navy (#0B2545) background, Boulder Blue (#2968A0) accents, a subtle soft-green (#75D69C) highlight. Minimal: a sterile-barrier pouch / Tyvek package and a hint of a vibration/compression test rig, lots of negative space for an overlaid wordmark. No text in the image. Corporate, trustworthy, ISO-compliance aesthetic."

## Jim-only manual steps
- **Merge** `brand/v2-package-testing` PR when approved (production currently V1).
- **Set Vercel env** (Project → Settings → Environment Variables):
  - `RESEND_API_KEY` — Resend API key (enables real email delivery to info@boulderiq.com)
  - `FORM_FROM_EMAIL` — verified sender, e.g. `Boulder Package Testing <forms@boulderbiomed.com>`
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 measurement ID (Analytics is env-gated; no-ops until set)
- Until `RESEND_API_KEY` is set, the contact form still works and logs every submission server-side (visible in Vercel runtime logs) — no submission is lost.

## TODOs / open content
- **Industry case studies** — 4 placeholder "Case Study" sections were removed from the industry pages (orthopedic, cardiovascular, ivd, dental). When real, anonymized case studies are available, add them back as a `Case Study` section on each industry page. Do not re-introduce placeholder copy.
- **Equipment make/model list** — no real make/model equipment list exists in the repo (only general equipment notes in `content/standards.ts`, e.g. "vibration table, drop tester, compression tester, conditioning chamber"). No invented equipment was added. If Jim wants a specific make/model spec sheet, provide the real equipment list and it can be wired in.
