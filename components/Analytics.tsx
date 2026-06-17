// Conditional GA4 + Google Ads loader and event helper.
//
// Set NEXT_PUBLIC_GA_MEASUREMENT_ID (e.g. G-XXXXXXXXXX) in Vercel project env
// vars to enable GA4. If unset, no scripts load and trackEvent is a silent
// no-op so dev / preview builds don't fire telemetry.
//
// Set NEXT_PUBLIC_GADS_CONVERSION_ID (e.g. AW-757644544) in Vercel project
// env vars to enable Google Ads conversion tracking. Optional, independent
// of GA4.
//
// Usage from any client component:
//   import { trackEvent } from "@/components/Analytics";
//   trackEvent("quote_request_submitted", { test_count: 3 });
import Script from "next/script";
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GADS_ID = process.env.NEXT_PUBLIC_GADS_CONVERSION_ID;
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
export function Analytics() {
  if (!GA_ID && !GADS_ID) return null;
  // Use whichever ID is present to bootstrap the shared gtag.js loader.
  const bootstrapId = GA_ID || GADS_ID;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${bootstrapId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${GA_ID ? `gtag('config', '${GA_ID}');` : ""}
${GADS_ID ? `gtag('config', '${GADS_ID}');` : ""}`}
      </Script>
    </>
  );
}
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag("event", name, params || {});
}
