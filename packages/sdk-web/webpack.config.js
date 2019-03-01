const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    regenerator: 'regenerator-runtime/runtime',
    app: './src/index.js'
  },

  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',
  },

  performance: {
    hints: false
  },

  resolve: {
    alias: {
      core: path.resolve(__dirname, './src/core'),
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      containers: path.resolve(__dirname, './src/containers'),
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    },
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.jsx', '.js', '.mjs']
  },

  module: {
    rules: [
      { 
        test: /\.(js|jsx)?$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/,
      }
    ]
  },

  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'Zup CORA SDK ',
      template: './src/index.ejs',
      config: './config/local.js'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CopyWebpackPlugin([
			{ from: './src/manifest.json', to: './' },
			{ from: './src/favicon.ico', to: './' },
			{ from: './config', to: './config' }
		])
  ],
}
