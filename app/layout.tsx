import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import { pricing } from "@/content/landing";
import "./globals.css";

/**
 * Self-hosted via next/font/google (no runtime Google Fonts request).
 * Single site-wide face: both --font-display and --font-body point at it.
 */
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  alternates: {
    canonical: "/", // canonical resolves against metadataBase (final domain later)
  },
  openGraph: {
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
    url: "/",
    siteName: siteConfig.productName,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${siteConfig.siteUrl}/api/og?title=${encodeURIComponent(siteConfig.seo.ogTitle)}&type=home`,
        width: 1200,
        height: 630,
        alt: siteConfig.productName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

// SoftwareApplication structured data (brand values come from config)
// Offer price is derived from the lowest tier's discounted price in
// content/landing.ts (pricing.tiers[0] = "Başlangıç") — no hardcoded price here.
const entryTier = pricing.tiers[0];
const entryTierPriceDigits = entryTier.price.discountedPrice.replace(/[^0-9]/g, "");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.productName,
  url: siteConfig.siteUrl,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Cloud",
  description: siteConfig.seo.description,
  offers: {
    "@type": "Offer",
    price: entryTierPriceDigits,
    priceCurrency: "TRY",
    description: `${entryTier.name} paketi, aylık abonelik — ${entryTier.price.discountNote}`,
  },
  publisher: { "@type": "Organization", name: siteConfig.companyName },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { googleAnalyticsId, googleTagManagerId, metaPixelId } = siteConfig;

  return (
    <html lang="tr" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* --- Google Tag Manager (renders only when ID is set) --- */}
        {googleTagManagerId && (
          <>
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${googleTagManagerId}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}

        {/* --- Google Analytics 4 (renders only when ID is set) --- */}
        {googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${googleAnalyticsId}');`}
            </Script>
          </>
        )}

        {/* --- Meta Pixel (renders only when ID is set) --- */}
        {metaPixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');`}
          </Script>
        )}

        {children}
      </body>
    </html>
  );
}
