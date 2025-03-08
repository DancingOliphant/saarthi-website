/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static site generation for Netlify
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
