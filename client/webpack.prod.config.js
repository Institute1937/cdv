const path = require('path')

module.exports = options => {
  return {
    entry: './js/index.js',
    output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.js',
    }
  }
}
