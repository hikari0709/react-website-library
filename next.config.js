/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.jp',
        port: '',
        pathname: '/640x360.png',
      },
    ],
  },
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['@untitled-theme/icons-react'],
  },
};

module.exports = nextConfig;
