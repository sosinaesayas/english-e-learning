import type { NextConfig } from "next";
import path from "path";

const API_INTERNAL_URL = process.env.API_INTERNAL_URL ?? "http://localhost:3001";

const nextConfig: NextConfig = {
  transpilePackages: ["@tutor/shared"],
  turbopack: {
    root: path.join(__dirname, "..", ".."),
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_INTERNAL_URL}/api/:path*`,
      },
      {
        // Local-disk file fallback (Cloudinary URLs bypass this once configured).
        source: "/uploads/:path*",
        destination: `${API_INTERNAL_URL}/uploads/:path*`,
      },
    ];
  },
};

export default nextConfig;
