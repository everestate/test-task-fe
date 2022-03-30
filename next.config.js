/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'ep.ts'],
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
