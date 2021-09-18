# Code Splitting


- 使用多入口的方式来拆分代码
- 防止重复
  - 使用 dependOn  + shared 把重复的代码提取到一个文件内
- 使用 optimization.splitChunks 来自动提取重复代码
```js
 optimization: {
    splitChunks: {
      chunks: 'all',
    },
```


