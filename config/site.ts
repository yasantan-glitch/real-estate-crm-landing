/**
 * Central brand configuration — the single source of truth for brand values.
 * Everything brand-related (name, domain, contacts, colors, tracking IDs,
 * form endpoint) is changed HERE and only here. Components never hardcode
 * brand values.
 */
export const siteConfig = {
  // --- Brand ---
  productName: "Emlak CRM Pro",
  companyName: "Emlak CRM Pro",
  domain: "www.emlakcrmpro.com",

  // --- Contact ---
  contactEmail: "crm@emlakcrmpro.com",
  contactPhone: "+90 530 691 3612",

  // --- Social ---
  socialLinks: {
    instagram: "",
    linkedin: "",
    youtube: "",
    x: "",
  },

  // --- Theme (mirrors the CSS variables in app/globals.css) ---
  primaryColor: "#0A0A0A", // near-black ink
  accentColor: "#D71920", // controlled red

  // --- Demo form ---
  // Default: internal API route. Override with NEXT_PUBLIC_DEMO_FORM_ENDPOINT
  // to point at Formspree / HubSpot / future CRM lead endpoint.
  demoFormEndpoint:
    process.env.NEXT_PUBLIC_DEMO_FORM_ENDPOINT || "/api/demo-request",

  // --- Tracking (rendered only when set) ---
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",

  // --- SEO (Turkish public copy; works without a final brand name) ---
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.emlakcrmpro.com",
  seo: {
    title:
      "Gayrimenkul Ofisleri İçin CRM | Portföy, Müşteri ve Danışman Yönetimi",
    description:
      "Emlak ofisiniz için web tabanlı CRM: portföy yönetimi, müşteri ve talep takibi, danışman performans raporları, satış pipeline ve komisyon takibi tek panelde. Demo talep edin.",
    ogTitle: "Gayrimenkul Ofisiniz İçin Akıllı CRM Sistemi",
    ogDescription:
      "Portföy, müşteri, talep, danışman ve satış süreçlerinizi tek CRM panelinden yönetin. Excel ve WhatsApp karmaşasına son verin.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
