// Conditional GA4 loader + event helper.
//
// Set NEXT_PUBLIC_GA_MEASUREMENT_ID (e.g. G-XXXXXXXXXX) in Vercel project env
// vars to enable. If unset, no scripts load and trackEvent is a silent no-op
// so dev / preview builds don't fire telemetry.
//
// Usage from any client component:
//   import { trackEvent } from "@/components/Analytics";
//   trackEvent("quote_request_submitted", { test_count: 3 });

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function Analytics() {
  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag("event", name, params || {});
}
