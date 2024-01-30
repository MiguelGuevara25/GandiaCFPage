/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["media.api-sports.io"],
  },
};

module.exports = nextConfig;
