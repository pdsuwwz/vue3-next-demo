/**
 * 打包时应注释该 import 语句
 */
// import webpack from 'webpack'

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')
const { VueLoaderPlugin } = require('vue-loader')
const resolve = (dir) => path.join(__dirname, dir)

/**
 * @type {webpack.Configuration}
 */
const config = {
  mode: process.env.NODE_ENV || 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: resolve('/dist')
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('template/index.html')
    }),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: false,
      onErrors (severity, errors) {
        if (severity !== 'error') return
        const error = errors[0]
        notifier.notify({
          title: 'Webpack error',
          message: `${severity}: ${error.name}`,
          subtitle: error.file || '',
        });
      },
    }),
  ],
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    quiet: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.vue'],
    alias: {
      '@': resolve('src'),
      'vue$': 'vue/dist/vue.runtime.esm-bundler.js'
    }
  }
}

module.exports = config