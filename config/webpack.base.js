const path               = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        use: [ 'babel-loader' ], 
        test: /\.js$/, 
        exclude: /node_modules/ 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/index.html',
      filename: './index.html',
      inject: false
    }),
    new CleanWebpackPlugin(
      ['dist'], 
      { root: path.resolve(__dirname, '..') }
    )
  ],
  resolve: {
    alias : {
      Sections   : path.resolve(__dirname, '../src/sections'),
      Components : path.resolve(__dirname, '../src/components'),
      Reducers   : path.resolve(__dirname, '../src/reducers'),
      Context    : path.resolve(__dirname, '../src/context'),
      Hooks      : path.resolve(__dirname, '../src/hooks'),
      Styles     : path.resolve(__dirname, '../src/styles')
    },
    extensions: [ '*', '.js', '.css', '.scss' ]
  },
}