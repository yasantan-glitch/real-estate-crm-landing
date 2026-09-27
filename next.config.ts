import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Canonical host is www.emlakcrmpro.com (see config/site.ts siteUrl).
  // Trailing-slash normalization is handled by Next.js itself: with
  // trailingSlash left at its default (false), a request with a trailing
  // slash already gets a 308 redirect to the slash-less form.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "emlakcrmpro.com" }],
        destination: "https://www.emlakcrmpro.com/:path*",
        permanent: true,
      },
      // "Kimler İçin" merged into /fiyatlandirma as segment sections.
      { source: "/kimler-icin", destination: "/fiyatlandirma", permanent: true },
      { source: "/kimler-icin/bireysel-emlakci", destination: "/fiyatlandirma#bireysel-emlakci", permanent: true },
      { source: "/kimler-icin/emlak-ofisi", destination: "/fiyatlandirma#emlak-ofisi", permanent: true },
      { source: "/kimler-icin/franchise", destination: "/fiyatlandirma#franchise", permanent: true },
      { source: "/basari-hikayesi", destination: "/crm-galerisi", permanent: true },
    ];
  },
};

export default nextConfig;
