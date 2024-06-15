一、@vue/cli脚手架
基于 Vue.js 进行快速开发的完整系统，帮我们快速的生成项目的整体结构

1、下载安装脚手架
npm i -g @vue/cli
2、使用脚手架创建项目
vue create 项目名称
3、运行脚手架项目
npm run serve

二、webpack构建工具
静态模块打包工具，最新版本webpack5，有关原理后续学习

三、项目模块介绍
node_modules:项目依赖
public：公共文件（一般为图片），webpack打包时，会原封不动打包到dist文件中
src
    assets: 放置静态资源，一般放置多个组件公用的静态资源
    components：全局组件（非路由组件）
    app.vue：唯一的根组件
    main.js：程序入口文件，也是整个程序中最先执行的文件

四、相关配置
1、npm run serve后浏览器自动打开http://localhost:8080/ 
"scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
}
2、eslint校验功能关闭
根目录下创建vue.config.js,添加
`
module.export = {
    lintOnSave: false
}
`
3、src文件夹配置别名
vue.config.js中module.exports通过alias别名引入文件
`
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}
module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve('./src'),
        "@c": resolve('./src/components'),
      }
    }
  }
})
`
`

五、项目依赖
1、less
安装：npm i -save less less-loader@5
配置：<style lang="less">
2、router
安装：npm install --save vue-router@3.5.2
步骤：
  -router文件夹下的index.js
  -main.js中注册
  -app.vue中<router-view></router-view>


六、插件
1、vscode支持vue组件:vue-official

七、相关知识点
1、路由元信息可控制组件显示与隐藏
v-show = this.$route.meta.show

