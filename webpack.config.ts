// @ts-ignore

const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = () => ({
  entry: {
    burger: './src/index.tsx',
  },
  stats: 'minimal',
  context: __dirname,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'astroturf/loader'],
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      {
        test: /.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]',
              },
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    contentBase: '/',
    historyApiFallback: true,
    hot: true,
    clientLogLevel: 'silent',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      src: path.resolve(__dirname, 'src/'),
    },
  },
});
