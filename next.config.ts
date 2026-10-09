import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Lets a verification build run alongside `next dev` without the two
  // writing into the same folder. Unset in normal use.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
