import Vue from 'vue'
import App from './App.vue'
// 引入vur-router
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册router
  router
}).$mount('#app')
