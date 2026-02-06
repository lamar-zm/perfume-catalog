import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Rewrite /uploads/* to the dynamic API route so uploaded images
  // are served correctly in production (Next.js only serves build-time
  // static assets from public/ in production mode).
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: '/api/uploads/:path*',
      },
    ];
  },
};

export default nextConfig;
