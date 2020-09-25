module.exports = {
  lintOnSave: false,
  transpileDependencies: ['common'],
  chainWebpack: config => {
    config.plugin('html')
      .tap((args) => {
        args[0].title = 'fe-qiankun-demo'
        return args
      })
  }
}