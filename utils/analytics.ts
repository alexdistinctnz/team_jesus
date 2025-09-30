interface EventPayload {
  [key: string]: any;
}

export function trackEvent(eventName: string, payload?: EventPayload): void {
  // TODO: Replace with actual analytics implementation (Google Analytics, Mixpanel, etc.)
  // TODO: Add environment variable NEXT_PUBLIC_GA_TRACKING_ID or similar
  console.log('[Analytics]', eventName, payload);

  // Example for future implementation:
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', eventName, payload);
  // }
}