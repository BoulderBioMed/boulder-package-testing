# Boulder BioMed Family — Web Strategy & SEO Audit
*Generated 2026-05-18 · Author: Jim Kasic + Claude · Vault filing: 02-Projects/Boulder-Web-Strategy/*

---

## Executive summary

Five Boulder-branded properties (boulderbiomed.com, boulderiq.com, bouldersterilization.com, boulderraqa.com, boulderbiolabs.com) operate as five disconnected sites with weak SEO. Combined web authority is being wasted. Recommendation: rebuild as hub-and-spoke architecture with boulderbiomed.com as authority hub. Launch new swim lane "Boulder Package Testing" at boulderpackagetesting.com using the existing Manus prototype as the starting point.

## Current state audit — all five legacy sites

### Common defects across all five

- Title tags are all the company name twice (e.g. "Boulder BioMed - Boulder Bio Med") — zero keyword value
- Meta descriptions are all missing or weak
- No H1 tags on most pages
- Logo images don't load (data:image SVG placeholders)
- `/SPA` nav links left over from theme setup
- WPBakery Page Builder bloat
- No schema markup
- No case studies, no resource downloads, no individual service pages

### Critical bugs discovered

1. **boulderiq.com footer links to boulderbiomed.NET** (not .com) in 4 places — broken link equity
2. **boulderbiolabs.com footer same issue** — same broken .net references
3. **boulderiq.com newsletter link broken**: `http://www.boulderbiomed/newsletter` (missing .com)

## Competitive landscape by sister company

### Boulder iQ — Engineering / Design / Manufacturing
**Direct competitors:** LSO, Cogmedix, Symmetry Medical, Resonetics, Donatelle, Tegra Medical, Cretex Medical
- LSO leads on positioning ("the regulated finish line")
- Boulder iQ edge: principal involvement, low-volume/high-touch
- Weakness: no case studies, generic positioning

### Boulder Sterilization — EO + CD
**Direct competitors:** Mass-EO, Blue Line Sterilization, Sterigenics/Sotera, Andersen Sterilizers, LSO (EO division), CG Labs
- Sterigenics dominates volume; Andersen owns small-batch flexibility
- Mass-EO and Blue Line are easy to outrank (weak web presence)
- Boulder Sterilization edge: only US contractor offering BOTH EO and CD; world's largest contract CD capacity
- Weakness: world's-largest-CD claim is buried in body text

### Boulder RA/QA — Regulatory + Quality Consulting
**Direct competitors:** Greenlight Guru, MedAcuity, Emergo by UL, BSI, NSF, RQM+, Promenade Software, Cavendish Scott ($3,750), QMSRAM ($4,700)
- Greenlight owns QMS software; Emergo/BSI own intl submissions
- Boulder RA/QA edge: AuditIQ product, operator-level credibility
- Weakness: site treats RA/QA as generic consulting — doesn't lean into AuditIQ

### Boulder BioLabs — Biological Testing (current scope)
**Direct competitors:** Nelson Labs (Sotera), Pacific BioLabs, Eurofins MTS, NAMSA, WuXi AppTec
- Nelson dominates micro/sterility
- BioLabs edge: co-located with sterilization, AAMI Industrial Sterilization Specialist
- Weakness: single-page site, almost no content

### Boulder Package Testing — proposed new swim lane
**Direct competitors:** Westpak (CA), LSO/MPT (CA + NH), DDL (MN + CA + NJ), Keystone Package Testing (PA + WI), Packaging Compliance Labs (MI), Nelson Labs (UT), Pacific BioLabs (CA), Compadre Labs, Applus+ Keystone, SGS
- All major players are in CA, MN, MI, PA, or UT
- **NO MAJOR ISTA-CERTIFIED LAB IN THE MOUNTAIN WEST (CO, UT non-Nelson, WY, MT, AZ, NM, ID)**
- Westpak site: competent but boring
- LSO site: new gold standard (Next.js, modern, schema-rich)
- Keystone site: best content depth (one page per standard)

## Recommended swim-lane name

**Boulder Package Testing** at `boulderpackagetesting.com`

Rationale:
- Direct match to search intent
- Already in Manus prototype og:url metadata
- Parallel naming with family (Boulder Sterilization, Boulder BioLabs, etc.)
- Category-brand naming wins for B2B SEO

Other candidates ranked, in order: Boulder Package Validation, Boulder Packaging Labs, Boulder Distribution Testing, Boulder Package Sciences

## Logo concepts (three SVG files in this folder)

- `logo-A-box-mark.svg` — isometric package with check, most literal
- `logo-B-seal-mark.svg` — sterile barrier peel + dye spots, QA-engineer language
- `logo-C-drop-mark.svg` — package over impact plate, ISTA 3A reference

Recommendation: **Concept B** (seal/peel) — speaks the buyer's language, differentiated, unique in category. Concept A is safest fallback.

## Manus prototype evaluation

URL: https://boulderpack-yewa6qj6.manus.space/

**Strengths (keep):**
- Proper title tag and meta description
- Keyword meta with exact-match standard names
- H1 says what you do
- Standards mentioned by exact name (ISO 11607-1, ASTM D4169, ASTM F1980, ISTA 3A)
- FAQ schema for AI search
- Differentiator headlined
- Workflow visualization

**Required additions before production launch:**
1. Individual standard landing pages: `/standards/iso-11607`, `/tests/ista-3a`, `/tests/astm-d4169`, `/tests/astm-f1980`, `/tests/astm-f88`, `/tests/astm-f1929`, `/tests/astm-f2096`, `/tests/astm-f1140`, `/tests/astm-f1886`, `/tests/astm-d4332`
2. Industry pages: `/industries/orthopedic`, `/industries/cardiovascular`, `/industries/ivd`, `/industries/dental`
3. Case studies (anonymized)
4. Pricing/lead time widget
5. Mountain West medtech corridor map
6. Gated resource downloads (email capture)
7. Schema markup: Organization, LocalBusiness, Service per test method, FAQPage, BreadcrumbList
8. Jim Kasic bio + AAMI credentials on every services page (E-E-A-T)

## Compliance language (CRITICAL — do not skip)

Before launching, verify and use only audit-defensible claims:
- ISTA certification status (if not yet certified: "executes ISTA test methods" or "ISTA-aligned protocols" — NOT "ISTA-certified lab")
- ISO 17025 accreditation status (if not yet: "ISO 17025-aligned QMS")
- A2LA accreditation status
- Specific equipment list and calibration records

False claims to ISTA certification, ISO 17025, or A2LA accreditation would be discovered immediately by QA buyers and would terminate sales pipeline.

## Google Ads strategy ($1,500/mo recommended initial budget)

### Tier 1 — high intent, low competition (start here)
- ISO 11607 package testing Colorado
- medical device package testing Denver
- ISTA 3A testing Colorado
- ASTM F1980 accelerated aging contract lab
- EO sterilization and package testing combined

### Tier 2 — broader, higher cost
- medical device packaging validation
- ISO 11607 validation lab
- sterile barrier testing

### Tier 3 — defensive (named competitor displacement)
- Westpak alternative
- LSO package testing alternative
- Nelson Labs alternative

### Negatives (always)
- pharmaceutical, food, cannabis, cosmetic, consumer

## AI search engine optimization (AEO)

What matters for ChatGPT Search, Perplexity, Claude, Google AI Overviews:
1. Direct, quotable answers
2. Structured data (FAQPage, HowTo, Service schema)
3. Clear authorship and expertise signals — Jim Kasic bio + credentials
4. No marketing fluff — AI parsers downrank generic claims
5. Citation-friendly specifics — "8-12 weeks for one-year shelf life" gets cited; "fast turnaround" does not

## Strategic recommendation: hub-and-spoke architecture

Make **boulderbiomed.com** the authority hub. Currently the weakest of the five sites — should be the strongest.

- boulderbiomed.com: long-form authority content, regulatory guides, comparisons, Mountain West medtech corridor positioning, case studies, news
- Each subsidiary domain stays focused on a single service category
- All five share consistent header navigation showing the family
- All five link consistently back to boulderbiomed.com (hub-and-spoke)
- One canonical sitemap, one GSC property group, one GBP per physical location
- One author identity (Jim Kasic) cited across all properties for compound E-E-A-T

## Execution sequence

1. **Today**: Fix boulderbiomed.NET typo in iQ + BioLabs footers (Jigawatts/Pite Creative ticket)
2. **This week**: Confirm name + logo concept. Verify boulderpackagetesting.com is registered.
3. **Next 2 weeks**: Begin ISTA certification process. Begin ISO 17025 accreditation conversation.
4. **Next 30 days**: Launch boulderpackagetesting.com as production site (clone Manus prototype, run through Pite Creative for brand alignment, host on own infrastructure)
5. **Next 60 days**: Add 8-10 standard-specific landing pages
6. **Next 90 days**: Begin parent-hub authority strategy on boulderbiomed.com
7. **Separate future project**: Full SEO optimization of all five existing legacy sites
