/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['placehold.jp'],
  },
};

module.exports = nextConfig;
