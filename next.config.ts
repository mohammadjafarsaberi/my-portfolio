import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static optimization
  output: undefined, // Use default (SSG is default in App Router)
  images: {
    unoptimized: false, // Enable image optimization for better performance
  },
};

export default nextConfig;
