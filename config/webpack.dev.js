const merge = require('webpack-merge')
const base  = require('./webpack.base')
const path  = require('path')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          }
        ],
        test: /\.css$/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    port: 3000,
    proxy: { '/api': 'http://localhost:8080' }
  }
})