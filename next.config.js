/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["platform-lookaside.fbsbx.com"]
  },
  experimental: {
    appDir: true,
  },
  env: {
    customKey: 'local',
  },
}
