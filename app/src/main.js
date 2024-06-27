import Vue from 'vue'
import App from './App.vue'
// 引入vue-router
import router from './router/index'
// 引入vuex仓库
import store from './store'
// 注册全局组件
import TypeNav from '@c/TypeNav'
import '@/mock/mockServe'
import "swiper/css/swiper.css"
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册router
  router,
  // 注册vuex仓库
  store
}).$mount('#app')
