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
};

module.exports = nextConfig;
