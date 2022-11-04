/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cf.bstatic.com'],
  },
}

module.exports = nextConfig
