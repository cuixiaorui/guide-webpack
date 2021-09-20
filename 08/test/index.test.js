jest.mock("child_process", () => {
  return {
    exec: jest.fn((command, callback) => {
      callback();
    }),
  };
});
const { exec } = require("child_process");
const path = require("path");
const webpack = require("webpack");
const ExecuteShellPlugin = require("../index");
describe("execute-shell-plugin", () => {
  it("execute shell command", async () => {
    // given
    // 给数据 -> index.js
    const commandOptions = {
      preBuild: ["ls"],
      postBuild: [],
    };
    // when
    // 触发构建动作
    await compiler(commandOptions);
    // then
    // exec 被调用的情况
    // mock
    // console.log(exec)
    // 调用 exec 时 参数应该是 ls
    expect(exec).toHaveBeenCalledWith("ls",expect.anything())
  });
});

function compiler(commandOptions) {
  const compiler = webpack({
    mode: "development",
    entry: path.resolve(__dirname, "./fixture/index.js"),
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "./dist"),
    },
    plugins: [new ExecuteShellPlugin(commandOptions)],
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
