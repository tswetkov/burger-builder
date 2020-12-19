const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require("path");

module.exports = (_, argv) => {
  return {
    entry: "./src/index.js",
    stats: "minimal",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          resolve: {
            extensions: [".js", ".jsx"],
          },
        },
        {
          test: /.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: "file-loader",
        },
        {
          test: /.png$/,
        },
      ],
    },
    devServer: {
      contentBase: '/',
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
      }),
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin(),
    ],
  };
};
