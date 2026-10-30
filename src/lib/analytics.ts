import { track } from "@vercel/analytics";
import { ANALYTICS_EVENTS_LIVE, ANALYTICS_LIVE } from "./contact";

export const eventsLive = ANALYTICS_LIVE && ANALYTICS_EVENTS_LIVE;

// Custom events need the Vercel Pro plan, and Pro allows two properties per event.
// Never send anything a visitor typed: names, phone numbers, businesses or messages.
export function trackEvent(name: string, properties: Record<string, string>) {
  if (eventsLive) track(name, properties);
}
