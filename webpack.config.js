const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = (env) => {
  const plugins = [
    new ExtractTextPlugin('css/styles.css')
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )
  }

  return {

    entry: {
      index: path.resolve(__dirname, 'src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/build.js',
      publicPath: path.resolve(__dirname, 'dist') + '/'
    },
    devServer: {
      port: 9000
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2']
            }
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              }
            ]
          })
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]'
            }
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['eslint-loader']
        }
      ]
    },
    plugins
  }
}
