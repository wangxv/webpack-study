class WebpackRunPlugin {
  apply(complier) {
    complier.hooks.run.tap('WebpackRunPlugin', () => {
      console.log('开始编译')
    });
  }
}
class WebpackDonePlugin {
  apply(complier) {
    complier.hooks.done.tap('WebpackDonePlugin', () => {
      console.log('结束编译')
    });
  }
}

module.exports = {
  WebpackRunPlugin,
  WebpackDonePlugin
}