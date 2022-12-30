const path = require("path");
const RemoveCommentsPlugins = require('./remove-comments-plugins');
const { WebpackRunPlugin, WebpackDonePlugin } = require('./webpack-plugins');

const loader1 = (source) => {
  return source + "//给你的代码加点注释：loader1";
};

const loader2 = (source) => {
  return source + "//给你的代码加点注释：loader2";
};

module.exports = {
  mode: "development", //防止代码被压缩
  entry: "./src/index.js", //入口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devtool: "source-map", //防止干扰源文件
  plugins: [
    // new RemoveCommentsPlugins(),
    new WebpackRunPlugin(),
    new WebpackDonePlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [loader1, loader2],
      },
    ],
  },
};
 