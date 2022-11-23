/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['avatar.vercel.sh'],
  },
}

module.exports = nextConfig
