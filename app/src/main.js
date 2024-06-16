import Vue from 'vue'
import App from './App.vue'
// 引入vur-router
import router from './router/index'
// 注册全局组件
import TypeNav from '@/pages/Home/TypeNav'
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册router
  router
}).$mount('#app')
