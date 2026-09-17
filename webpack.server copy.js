const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  target: 'node',
  entry: './server.js',
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build/public'),
    libraryTarget: 'commonjs2',
		publicPath: '/assets/',
		clean: true
  },
	devtool: isProduction ? false : "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              emit: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportOnlyLocals: true
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              emit: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: /\.module\.scss$/,
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportOnlyLocals: true
              }
            }
          },
          'sass-loader'
        ]
      },
			{
        /* Fonts and Images */
        test: /\.(png|gif|jpg|jpeg|svg|ttf|eot|svg|otf|woff(2)?)(\?[a-z0-9]+)?$/,
        type: 'asset/resource',
				generator: {
          filename: '[name]-[contenthash:8][ext]', // Keep original filenames
        },
			},
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash:8].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
