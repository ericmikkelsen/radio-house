// next.config.js
const withPreact = require('@zeit/next-preact')

module.exports = withPreact( {
  exportPathMap: () => {
    return {
      '/': { page: '/' }
    }
  },
  webpack: (config, options) => {
    return config
  }
} )