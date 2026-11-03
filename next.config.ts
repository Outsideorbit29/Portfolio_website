import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep old links to the previous resume route working.
  async redirects() {
    return [
      { source: "/api/resume", destination: "/resume.pdf", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
