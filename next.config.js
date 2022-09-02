/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['images.asos-media.com', 'images.pexels.com'],
  },
  build: {
    command: 'npm run build',
    commandOrigin: 'ui',
    environment: '- NEXT_PRIVATE_TARGET',
    publish: '/opt/build / repo /.next',
    publishOrigin: 'ui',
    nextConfig
  },
  plugins: {
    '-inputs': {},
    origin: 'ui',
    package: '@netlify/plugin-nextjs'
  }
}
