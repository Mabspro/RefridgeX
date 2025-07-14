import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true
  },
  trailingSlash: false,
  experimental: {
    esmExternals: 'loose'
  }
};

export default nextConfig;
