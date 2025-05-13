import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: '/', 
  // Optional: Set a trailing slash for cleaner URLs
  trailingSlash: true,
};

export default nextConfig;
