const {ExecuteShellPlugin,FileListPlugin} = require('../index');
const path =require('path');
module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"./dist")
    },
    plugins:[
        new FileListPlugin(),
        new ExecuteShellPlugin({
            preBuild:["ls"],
            postBuild:["ls"],
        })
    ]
}