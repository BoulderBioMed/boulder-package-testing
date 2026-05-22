# BLOCKERS — Boulder Package Testing Site Build

Items below require Jim's real-world input before the site is fully production-ready.

## Content Blockers

1. **Equipment lists** — Each test method page has a generic equipment note. Jim needs to provide the specific equipment make/model/calibration status for each test method (vibration table, drop tester, compression tester, aging chambers, tensile tester, burst tester, dye penetration station, bubble leak tank, conditioning chambers).

2. **Case studies** — All four industry pages have anonymized case study placeholders. Jim needs to provide real or anonymized project examples for orthopedic, cardiovascular, IVD, and dental device packaging validation.

3. **Jim Kasic bio photo** — The about page has Jim's bio text and credentials but no headshot photo.

4. **OG image** — Currently using a dynamically generated OG image via Next.js `ImageResponse`. For production, consider a designed 1200x630 PNG with the actual logo rendered properly.

5. **Favicon** — No custom favicon.ico yet. Need a 16x16 and 32x32 favicon derived from the logo mark.

## Technical Blockers

6. **Contact form email delivery** — The `/api/contact` route currently logs submissions to console. Need to wire to an email service (SendGrid, Resend, etc.) to actually deliver form submissions to `info@boulderpackagetest.com`. Credentials go in `.env`.

7. **Domain setup** — Site assumes `boulderpackagetest.com` as the canonical domain. DNS must be configured and domain connected to Vercel before production launch.

8. **ISTA certification status** — All compliance language uses "ISTA-aligned protocols" and "ISO 17025-aligned QMS" per Jim's instruction. Update site language once actual ISTA certification and ISO 17025 accreditation are awarded.

9. **Geo coordinates** — Used 40.0274, -105.2519 for the LocalBusiness schema (from build doc). Jim should verify this is the correct lat/lng for 5375 Western Ave, Boulder, CO 80301.

10. **Vercel deployment** — Vercel link and preview deployment not yet run (requires interactive auth). Jim should run `npx vercel link` and `npx vercel --prod=false` to deploy.

## Nice-to-Haves (Not Blocking Launch)

- Mountain West medtech corridor map visualization
- Pricing/lead-time interactive widget
- Gated resource downloads (email capture for white papers)
- Google Analytics / Tag Manager integration
- Google Business Profile setup and verification
