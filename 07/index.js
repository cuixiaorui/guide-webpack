const remark = require("remark");
const loaderUtils = require('loader-utils');
const html = require("remark-html");

module.exports = function (markdown) {
//   console.log(">>>>>>source");
//   console.log(markdown);
  // markdown -> html string
//   console.log(this)
  const callback = this.async();
  const options = loaderUtils.getOptions(this)

  remark()
    .use(html,options)
    .process(markdown, (err, file) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, `export default \`${String(file.contents)}\``);
    });
};
