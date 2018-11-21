const path = require("path");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  // mode: "development",
  mode: "production",
  entry: path.resolve("./src/main.js"),
  output: {
    path: path.resolve("./"),
    filename: "modular-jsx.min.js"
  },
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({ uglifyOptions: { output: { comments: false } } })
  //   ]
  // }
};