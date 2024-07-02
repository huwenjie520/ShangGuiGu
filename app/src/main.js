import Vue from 'vue'
import App from './App.vue'
// 引入vue-router
import router from './router/index'
// 引入vuex仓库
import store from './store'
// 注册全局组件
import TypeNav from '@c/TypeNav'
import Carousel from '@c/Carousel'
import '@/mock/mockServe'
import "swiper/css/swiper.css"
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册router
  router,
  // 注册vuex仓库
  store,
  beforeCreate(){
		Vue.prototype.$bus = this	//安装全局事件总线
	}
}).$mount('#app')
