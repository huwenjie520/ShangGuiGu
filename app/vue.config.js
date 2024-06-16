const { defineConfig } = require('@vue/cli-service')

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint自动校验
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve('./src'),
        "@c": resolve('./src/components'),
        "@p": resolve('./src/pages'),
      }
    }
  }
})
