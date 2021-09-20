const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: path.resolve(__dirname, "../index.js"),
        options: {
          closeSelfClosing: true,
        },
      },
    ],
  },
};
