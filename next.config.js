const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    unoptimized : true
  },
  async rewrites() {
    return [
      {
        source: '/index',
        destination: '/',
      }
    ]
  }
}



module.exports = withBundleAnalyzer(nextConfig)
