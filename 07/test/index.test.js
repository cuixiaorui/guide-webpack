const path = require("path");
const webpack = require("webpack");
describe("markdown-to-html-string-loader", () => {
  it("handle markdown to html string ", async () => {
    // given
    // 准备测试数据
    // when
    const stats = await compiler();
    // console.log(stats.toJson());
    // 触发动作
    // then
    // 对比值
    const expectation = `export default \`<h1>markdown</h1>
    <p>这是一个测试文件</p>
    <p><img src="" alt="图片" /></p>\``;
    const received = stats.toJson().modules[0].source;
    expect(expectation.replace(/\s/g,"")).toBe(received.replace(/\s/g,""));
  });
});

function compiler() {
  const compiler = webpack({
    mode: "development",
    entry: path.resolve(__dirname, "./fixture/doc.md"),
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
  });

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(stats);
    });
  });
}
