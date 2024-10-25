module.exports = {
  images: {
    // [Tip] Solve error:
    // "is not configured under images in your `next.config.js`"
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/**'
      }
    ]
  }
}