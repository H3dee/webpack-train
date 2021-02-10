const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: '/index.js',
    analytics: '/analytics.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.png'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: ['file-loader'],
      },
      {
        test: /\.xml$/,
        use: 'file-loader',
      },
      {
        test: /\.csv$/,
        use: 'csv-loader',
      },
    ],
  },
}
