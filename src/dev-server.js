// @flow

var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");

var PORT = parseInt(process.env.PORT, 10) || 3000;

new WebpackDevServer(webpack(config), {
  contentBase: __dirname,
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(PORT, function(err) {
  if (err) {
    return console.log(err); // eslint-disable-line no-console
  }
  console.log("Listening at http://localhost:" + PORT); // eslint-disable-line no-console
});
