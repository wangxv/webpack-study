class RemoveCommentsPlugin {
  apply (compiler) {
    compiler.hooks.compilation.tap('RemoveCommentsPlugin', compilation => {
      compilation.hooks.processAssets.tap({
        name: 'RemoveCommentsPlugin',
        stage: compilation.PROCESS_ASSETS_STAGE_ADDITIONS
      }, (assets) => {
        console.log('asets-----:', assets);
        Object.entries(assets).forEach(([pathname, source]) => {
          if (pathname.endsWith('.js')) {
            let contents = source.source();
            contents = contents.replace(/\/\*{2,}\/\s?/g, '');
            console.log('assets[pathname]: ', assets[pathname]);
            assets[pathname]._source = source
          }
        });
      })
    });
  }
}

module.exports = RemoveCommentsPlugin;
