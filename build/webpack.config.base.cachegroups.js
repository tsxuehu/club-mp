const groups = {
  commons: {
    name: 'commons',
    chunks: 'initial',
    minChunks: 2
  },
  vendors: {
    test: /[\\/]node_modules[\\/]/,
    name: 'vendors',
    chunks: 'all'
  },

  showcaseCommons: {
    name: 'showcase',
    test: (module) => /\.js$/.test(module.resource) && /components\/showcase/.test(module.resource),
    chunks: 'all',
    minSize: 0,
    minChunks: 1,
    priority: 3
  }
}

module.exports = groups