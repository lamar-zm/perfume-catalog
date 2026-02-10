import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Images are stored in data/uploads/ (not public/) and served via
  // the /api/uploads/[...path] route. This rewrite makes /uploads/file.jpg
  // transparently hit that API route.
  async rewrites() {
    return {
      // "beforeFiles" runs BEFORE static file serving, so /uploads/* will
      // always hit our API route rather than the public/ folder.
      beforeFiles: [
        {
          source: '/uploads/:path*',
          destination: '/api/uploads/:path*',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },

  // Disable all caching — every page is always fresh
  async headers() {
    return [
      {
        source: '/((?!uploads/).*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, proxy-revalidate' },
          { key: 'Pragma', value: 'no-cache' },
          { key: 'Expires', value: '0' },
        ],
      },
    ];
  },
};

export default nextConfig;
