const { exec } = require("child_process");
const defaultOptions = {
  preBuild: [],
  postBuild: [],
  preExit: [],
};
module.exports = class ExecuteShellPlugin {
  constructor(options) {
    this.options = this.mergeOptions(options);
  }

  mergeOptions(options) {
    return Object.assign({}, defaultOptions, options);
  }
  apply(compiler) {
    // console.log(compiler)
    // btn click  addEvent
    compiler.hooks.compilation.tap("executeShellPlugin", () => {
      console.log("--------preBuild---------");
      this.executeCommand(this.options.preBuild);
    });

    compiler.hooks.afterEmit.tap("executeShellPlugin", (compilation) => {
      console.log("--------postBuild---------");
      this.executeCommand(this.options.postBuild);
    });

    compiler.hooks.done.tap("executeShellPlugin", () => {
      console.log("--------preExit---------");
      this.executeCommand(this.options.preExit);
    });
  }

  executeCommand(commands) {
    commands.forEach((command) => {
      exec(command, (err, stdout, stderr) => {
        if (err) {
          throw err;
        }
        console.log(stdout);
        console.log(stderr);
      });
    });
  }
};
