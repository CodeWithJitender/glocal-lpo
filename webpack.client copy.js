const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
		client: './client.js',
	},
  output: {
    filename: 'client.[contenthash:8].js',
		chunkFilename: 'chunk.[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/assets/'
  },
	devServer: {
		hot: true,
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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: /\.module\.scss$/,
                localIdentName: '[name]__[local]--[hash:base64:5]'
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
    }),
		new WebpackManifestPlugin({
      fileName: path.resolve(__dirname, 'build/assets-manifest.json'), // Generates a JSON file with mappings
    }),
		new LoadablePlugin({ filename: 'loadable-stats.json' }),
		new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public/favicon.png'), to: "" },
				{ from: path.resolve(__dirname, 'public/robots.txt'), to: "" },
				{ from: path.resolve(__dirname, 'public/emailer/envelope.png'), to: "emailer" },
				{ from: path.resolve(__dirname, 'public/emailer/mobilebutton.png'), to: "emailer" },
				{ from: path.resolve(__dirname, 'public/emailer/instagram-circle-colored.png'), to: "emailer" },
				{ from: path.resolve(__dirname, 'public/emailer/linkedin-circle-colored.png'), to: "emailer" },
				{ from: path.resolve(__dirname, 'public/emailer/logo.png'), to: "emailer" },
				{ from: path.resolve(__dirname, 'public/real-state-litigation-support'), to: "real-state-litigation-support", noErrorOnMissing: true },
				{ from: path.resolve(__dirname, 'public/personal-injury'), to: "personal-injury", noErrorOnMissing: true },
				{ from: path.resolve(__dirname, 'public/criminal-law'), to: "criminal-law", noErrorOnMissing: true },
				{ from: path.resolve(__dirname, 'public/bundle-offer'), to: "bundle-offer", noErrorOnMissing: true },
				{ from: path.resolve(__dirname, 'public/real-estate'), to: "real-estate", noErrorOnMissing: true },
				{ from: path.resolve(__dirname, 'public/family-law'), to: "family-law", noErrorOnMissing: true }
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
		}
  }
};
