import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["*"],
  },
  compiler: {
    removeConsole: false,
  },
};

export default nextConfig;
