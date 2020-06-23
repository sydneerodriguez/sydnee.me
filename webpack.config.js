const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, { mode = 'production' } = {}) => ({
  mode,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsxSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public' }
      ]
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
  ],
  resolve: {
    extensions: ['.ts', '.wasm', '.mjs', '.js', '.json'],
  },
  watch: mode !== 'production',
})
