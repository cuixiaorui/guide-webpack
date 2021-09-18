const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: './src/index.js',
    another: './src/another-module.js',

    // 方式一
    // 使用 dependOn 把重复的代码可以抽离出去
    // index: {
    //   import: "./src/index.js",
    //   dependOn: "shared",
    // },
    // another: {
    //   import: "./src/another-module.js",
    //   dependOn: "shared",
    // },
    // shared: ["lodash"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean:true
  },
  // 方式二
  // 也可以使用 splitChunks 自动来抽取重复的代码
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
