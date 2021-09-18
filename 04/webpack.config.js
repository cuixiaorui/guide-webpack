const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./dist",
  },
  // 也可以设置 devTool
  // mode development 默认的 devTool 就很好用了
  // 文档:https://webpack.js.org/configuration/devtool/
  // devtool: "inline-source-map",
};
