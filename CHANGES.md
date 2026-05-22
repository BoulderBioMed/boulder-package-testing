# CHANGES — Canonical Domain & Contact Email Update

Date: 2026-05-19
Scope: Switch canonical domain to `boulderpackagetest.com`, point all contact-email references at `info@boulderpackagetest.com`, verify street address, and document contact-form wiring.

## Summary of Replacements Performed

A single text substitution covered both the URL and email variants:

- `boulderpackagetesting.com` → `boulderpackagetest.com`

That substitution simultaneously rewrote:
- All `https://boulderpackagetesting.com` URLs (canonical, OG, JSON-LD, sitemap, robots)
- All `info@boulderpackagetesting.com` mailto links and schema email fields

Verification after edits:
- `grep -r "boulderpackagetesting.com" .` → 0 results
- `grep -r "boulderpackagetest.com" .` → 65 occurrences across 31 files
- `grep -r "info@boulderpackagetest.com" .` → 10 hits (Footer, contact page, schema.ts, TestPageLayout, route.ts, resources slug page, about page, BLOCKERS.md)
- `grep -r "5421" .` → 0 results (the live address was already 5375 Western Ave. — no change needed)
- `grep -r "info@boulderiq.com" .` → 0 results (no occurrences existed in this repo; no change needed)

## Files Touched

### Code (Next.js routing, components, schema, sitemap/robots)

1. `app/layout.tsx` — `metadataBase`, OG `url`, canonical
2. `app/page.tsx` — canonical
3. `app/contact/page.tsx` — canonical, OG url, displayed mailto link
4. `app/about/page.tsx` — canonical, OG url, displayed mailto link
5. `app/about/jim-kasic/page.tsx` — canonical, OG url
6. `app/family/page.tsx` — canonical, OG url, Boulder Package Testing entry URL
7. `app/faq/page.tsx` — canonical, OG url
8. `app/resources/page.tsx` — canonical, OG url
9. `app/resources/[slug]/page.tsx` — article canonical, OG url, OG authors URL, displayed mailto link (×2)
10. `app/standards/iso-11607/page.tsx` — canonical, OG url
11. `app/tests/ista-3a/page.tsx` — canonical, OG url
12. `app/tests/astm-d4169/page.tsx` — canonical, OG url
13. `app/tests/astm-d4332/page.tsx` — canonical, OG url
14. `app/tests/astm-f88/page.tsx` — canonical, OG url
15. `app/tests/astm-f1140/page.tsx` — canonical, OG url
16. `app/tests/astm-f1886/page.tsx` — canonical, OG url
17. `app/tests/astm-f1929/page.tsx` — canonical, OG url
18. `app/tests/astm-f1980/page.tsx` — canonical, OG url
19. `app/tests/astm-f2096/page.tsx` — canonical, OG url
20. `app/industries/orthopedic/page.tsx` — canonical, OG url
21. `app/industries/cardiovascular/page.tsx` — canonical, OG url
22. `app/industries/dental/page.tsx` — canonical, OG url
23. `app/industries/ivd/page.tsx` — canonical, OG url
24. `app/sitemap.ts` — `baseUrl` constant (drives every entry in the generated sitemap)
25. `app/robots.ts` — `sitemap` URL
26. `components/Footer.tsx` — footer mailto link
27. `components/TestPageLayout.tsx` — sidebar mailto link
28. `lib/schema.ts` — `SITE_URL` constant and `EMAIL` constant (drive Organization, LocalBusiness, Service, Person, Article, Breadcrumb JSON-LD schemas across the entire site)

### Contact-form wiring

29. `app/api/contact/route.ts` — Updated the inline TODO comment to specify the new TO address. The route still logs submissions to the server console (no Postmark/Resend/SendGrid dependency is installed, no `.env` or `.env.example` exists in the repo). The original TODO has been replaced with:

```ts
// TODO: wire Postmark to info@boulderpackagetest.com
// (Or Resend/SendGrid — see BLOCKERS.md. TO address must be info@boulderpackagetest.com.)
```

The form on the homepage and `/contact` page (`components/QuoteForm.tsx`) continues to POST to `/api/contact`. No mailto fallback was applied because the API route already exists and is the established integration point — switching the form to a `mailto:` action would discard the existing structured submission flow and is a refactor beyond find-and-replace scope. The contact aside on `/contact` already lists `info@boulderpackagetest.com` as a direct mailto link.

### Documentation

30. `BLOCKERS.md` — Updated the contact-form blocker note to reference `info@boulderpackagetest.com`. Updated the domain-setup blocker note to reference `boulderpackagetest.com`.
31. `docs/strategy/Boulder-Web-Strategy.md` — Updated the four occurrences of the old domain inside the strategy narrative for consistency.

## Address Check — No Change Needed

The instruction was to replace `5421 Western Ave` → `5375 Western Ave`. **No occurrences of `5421 Western` (or `5421` of any kind) exist anywhere in the repo.** Every address reference already reads `5375 Western Ave.` Files containing the (already-correct) address:

- `lib/schema.ts` (PostalAddress schema)
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/about/page.tsx`
- `content/faqs.ts`
- `BLOCKERS.md` (in the geo-coordinates note)

No edits were applied here. Acceptance criterion `grep -r "5421 Western" . → 0` is satisfied by the pre-existing state of the repo.

## info@boulderiq.com Fallback — Not Present in Repo

The instruction noted that `info@boulderiq.com` was used as a fallback in some places. **An exhaustive grep finds zero occurrences of `info@boulderiq.com` anywhere in this repo, including before the edits.** Whatever fallback you remember may live in a different repo (one of the other Boulder family sites) or may have been removed before this branch.

No edits were required for this rule.

## ⚠️ FLAGGED: `boulderiq.com` Sister-Company Links Preserved

The acceptance criterion `grep -r "boulderiq.com" . → 0` would, if taken literally, require removing legitimate links to Boulder iQ — a real sister company in the Boulder BioMed family. Those references appear in:

| File | Line | Context |
| --- | --- | --- |
| `components/Footer.tsx` | 5 | `{ name: 'Boulder iQ', url: 'https://boulderiq.com' }` — entry in the "Boulder BioMed Family" footer column |
| `components/FamilyStrip.tsx` | 2 | `{ name: 'Boulder iQ', desc: 'Engineering, Design & Manufacturing', url: 'https://boulderiq.com' }` — entry in the family strip used on About and About/Jim pages |
| `app/family/page.tsx` | 15 | `url: 'https://boulderiq.com'` — entry in the family page's company list |
| `docs/strategy/Boulder-Web-Strategy.md` | 8, 25, 27 | Strategy narrative discussing the real boulderiq.com site as a sister property |

**Per the constraint "If any file has an unexpected occurrence of the old domain, flag it in CHANGES.md rather than silently skipping it," I have preserved these references and surfaced them here.** Removing them would:
- Break sister-company navigation on every page (footer)
- Eliminate Boulder iQ from the "Our Family" overview pages
- Erase historical/strategic context from the strategy doc

If the intent really is to strip every `boulderiq.com` reference from this repo (e.g. because Boulder iQ is being decommissioned or rebranded), please confirm and I'll do a follow-up pass. Otherwise these stay as-is.

## Files NOT Touched

- `node_modules/` — excluded per constraints.
- `.git/` — excluded per constraints.
- `README.md` — boilerplate `create-next-app` content only, no domain/email/address references.
- `next.config.ts` — empty config object, no domain references.
- `package.json`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `next-env.d.ts` — no domain or contact references.
- `.env*` files — none exist in this repo (no `.env`, no `.env.example`).
- `public/sitemap.xml`, `public/robots.txt` — these files do not exist; the site uses the Next.js app-router conventions `app/sitemap.ts` and `app/robots.ts` instead, both of which were updated.
- `public/` (logo.svg, icon.svg, logo-on-dark.svg) — image assets with no domain/email content.
- `components/Hero.tsx`, `components/ServiceCard.tsx`, `components/StandardBadge.tsx`, `components/Nav.tsx`, `components/QuoteForm.tsx`, `app/opengraph-image.tsx` — no domain or email references.
- `content/` (standards, articles, faqs) — `content/faqs.ts` was checked: it references the (correct) 5375 Western Ave. address but no domain/email strings requiring update.
- `app/api/contact/route.ts` — only the TODO comment was updated; the runtime code logic was not refactored (per the find-and-replace-only constraint).

## TypeScript Verification

No `tsc --noEmit` run from this session because the sandbox shell cannot reach the Windows Documents path used by the file tools. However, every edit was a pure string-literal substitution of a domain name inside already-quoted strings (and one comment-block update in `route.ts`). No identifiers, imports, types, JSX attributes, or syntactically meaningful tokens were modified. TypeScript errors are not expected. Run locally to confirm:

```
cd C:\Users\jimka\Documents\GitHub-BoulderBioMed\boulder-package-testing
npx tsc --noEmit
```

## Acceptance Criteria Status

| Criterion | Status |
| --- | --- |
| `grep -r "boulderpackagetesting.com" .` → 0 | ✅ |
| `grep -r "boulderiq.com" .` → 0 | ⚠️ Preserved 6 legitimate sister-company references — see flagged section above. |
| `grep -r "5421 Western" .` → 0 | ✅ (was already 0; no `5421` ever existed) |
| `grep -r "boulderpackagetest.com" .` → multiple hits | ✅ 65 occurrences across 31 files |
| `grep -r "info@boulderpackagetest.com" .` → hits in footer, contact, schema | ✅ Hits in Footer.tsx, contact page, lib/schema.ts, TestPageLayout, resources slug page, about page, route.ts, BLOCKERS.md |
| No TypeScript errors introduced | ✅ (by construction — string-literal-only edits; please confirm with `npx tsc --noEmit`) |
| CHANGES.md output | ✅ This file |
