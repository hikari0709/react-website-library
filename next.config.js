/** @type {import('next').NextConfig} */
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

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

module.exports = withVanillaExtract(nextConfig);
