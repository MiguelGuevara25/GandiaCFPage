/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["admin.clubdefutbolgandia.com", "media.api-sports.io", "localhost"],
  },
};

module.exports = nextConfig;
