"use client";

import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import { eventsLive, trackEvent } from "@/lib/analytics";
import { ANALYTICS_LIVE } from "@/lib/contact";

// Links carry data-track (the event name) with data-where or data-brand, so they stay plain links with no client code of their own.
// Call clicks are picked up from any tel: link, labelled with the nearest section.
function handleClick(event: MouseEvent) {
  const link = (event.target as Element).closest?.("a");
  if (!link) return;
  const { track: name, where, brand } = link.dataset;
  if (name) trackEvent(name, brand ? { brand } : { where: where ?? "unknown" });
  else if (link.getAttribute("href")?.startsWith("tel:")) trackEvent("Call click", { where: link.closest("section[id], header, footer, .wa-panel")?.id || link.closest("header, footer, .wa-panel")?.tagName.toLowerCase() || "page" });
}

export default function SiteAnalytics() {
  useEffect(() => {
    if (!eventsLive) return;
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return ANALYTICS_LIVE ? <Analytics /> : null;
}
