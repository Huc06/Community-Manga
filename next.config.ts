import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Remove or replace 'appDir' with a valid experimental feature if needed
  },
};

export default nextConfig;
