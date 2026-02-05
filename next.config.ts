import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;
              connect-src *;
              img-src * data: blob:;
              frame-src *;
              script-src * 'unsafe-inline' 'unsafe-eval';
              style-src * 'unsafe-inline';
            `.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

export default nextConfig;
