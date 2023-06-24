const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const mode = process.env.NODE_ENV || "development";

const babelLoader = {
  loader: "babel-loader",
  options: {
    cacheDirectory: true,
    presets: ["@babel/preset-typescript", "@babel/preset-env", "@babel/react"],
    plugins: ["@babel/plugin-transform-typescript", "react-hot-loader/babel"],
  },
};

module.exports = {
  mode: mode,

  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  output: {
    filename: "[contenthash].main.js",
    path: path.resolve(__dirname, "docs"),
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          babelLoader,
          //   {
          //     loader: "ts-loader",
          //   },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [babelLoader],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  devServer: {
    // entry: path.join(__dirname, "src"),
    // compress: true,
    port: 9000,
    host: "0.0.0.0",
    hot: true,
    https: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
};
