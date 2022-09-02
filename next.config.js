/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['images.asos-media.com', 'images.pexels.com'],
  },
  nextConfig
}
