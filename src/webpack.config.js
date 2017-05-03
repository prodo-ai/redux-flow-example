// @flow

/* eslint prettier/prettier: ["error", {"bracketSpacing": false, "trailingComma": "es5"}] */

var path = require("path");
var webpack = require("webpack");

var PORT = parseInt(process.env.PORT, 10) || 3000;

var root = path.resolve(__dirname, "..");
var src = path.join(root, "src");
var dist = path.join(root, "dist");

module.exports = {
  context: src,
  devtool: "eval",
  entry: [
    "babel-polyfill",
    "webpack-dev-server/client?http://localhost:" + PORT,
    "webpack/hot/only-dev-server",
    path.join(src, "index.js"),
  ],
  output: {
    path: dist,
    filename: "bundle.js",
    publicPath: "/static/",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["react-hot-loader", "babel-loader"],
        include: [src],
      },
    ],
  },
};
