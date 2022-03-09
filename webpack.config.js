const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const SystemJSPublicPathWebpackPlugin = require('systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin')
const webpack = require('webpack')

module.exports = () => ({
  entry: {
    main: path.resolve(__dirname, './src/main.js'),
  },

  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    libraryTarget: 'system',
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },

  devServer: {
    port: 8886,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                isCustomElement: tag => tag.startsWith('as-')
              }
            }
          }
        ],
      },

      {
        test: /\.(c|s[ac])ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new SystemJSPublicPathWebpackPlugin({
      rootDirectoryLevel: 2,
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],

  externals: [
    'single-spa-vue',
    'vue',
    '@niagahoster/components'
  ],
})
