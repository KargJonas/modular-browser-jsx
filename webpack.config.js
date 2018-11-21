const path = require("path");

module.exports = {
  // mode: "development",
  mode: "production",
  entry: path.resolve("./src/main.js"),
  output: {
    path: path.resolve("./"),
    filename: "modular-jsx.min.js"
  }
};