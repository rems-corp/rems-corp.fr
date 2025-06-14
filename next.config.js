/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  distDir: 'build',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
