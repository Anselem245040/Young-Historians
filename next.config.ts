import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/programs", destination: "/#programs", permanent: false },
      { source: "/impact", destination: "/#impact", permanent: false },
      { source: "/community", destination: "/#community", permanent: false },
    ];
  },
};

export default nextConfig;
