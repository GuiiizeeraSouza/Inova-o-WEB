"use client";

import { useEffect } from "react";
import Script from "next/script";
import { GA_MEASUREMENT_ID, business } from "@/lib/site";

type Gtag = (command: "event", name: string, params: Record<string, string>) => void;

// Contact clicks are the site's conversions, so they are sent as GA4 events
function trackConversionClicks(event: MouseEvent) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  const link = (event.target as Element | null)?.closest?.("a");
  if (!gtag || !link) return;

  const params = { link_url: link.href, page_path: window.location.pathname };
  if (link.href.includes("wa.me/")) gtag("event", "contato_whatsapp", params);
  else if (link.href.startsWith(business.purchaseSiteUrl)) gtag("event", "clique_loja_passeios", params);
  else if (link.href.startsWith("mailto:")) gtag("event", "contato_email", params);
}

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    document.addEventListener("click", trackConversionClicks);
    return () => document.removeEventListener("click", trackConversionClicks);
  }, []);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
