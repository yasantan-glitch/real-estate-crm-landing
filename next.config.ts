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
    ];
  },
};

export default nextConfig;
