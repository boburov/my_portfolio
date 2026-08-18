import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json in the home directory otherwise makes Next
  // infer the wrong workspace root.
  outputFileTracingRoot: path.join(__dirname),
  // Lets a production build run alongside `next dev` without sharing .next
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    remotePatterns: [
      // Profile avatar
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
  async redirects() {
    // These pages were folded into homepage sections; keep old links working.
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/ability", destination: "/#skills", permanent: true },
      { source: "/skills", destination: "/#skills", permanent: true },
    ];
  },
};

export default nextConfig;
