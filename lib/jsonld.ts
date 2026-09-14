export interface FaqItem {
  q: string;
  a: string;
}

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/**
 * "Service" (not "LocalBusiness") — the product is a web-based SaaS with no
 * physical office in the served city, so a LocalBusiness schema (which
 * implies a street address/geo) would be inaccurate structured data.
 */
export function buildServiceJsonLd(params: {
  serviceName: string;
  areaServed: string;
  description: string;
  providerUrl: string;
  providerName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.serviceName,
    areaServed: { "@type": "City", name: params.areaServed },
    description: params.description,
    provider: {
      "@type": "Organization",
      name: params.providerName,
      url: params.providerUrl,
    },
  };
}
