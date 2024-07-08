import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {}, () => {});
    }
}
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => {}, () => {});
    }
}

var routes = [
    {
        path: '/',
        redirect: 'home'
    },
    {
        path: '/home',
        component: () => import('../pages/Home'),
        // 是否显示footer组件
        meta: {
            show: true
        }
    },
    {
        name: 'search',
        // ？表示key参数可传可不传，如果不加？，那么必须要通过params方式传递key参数
        path: '/search/:keyword?',
        component: () => import('../pages/Search'),
        meta: {
            show: true
        },
        // 布尔值写法
        // props: true
        // 对象写法
        // props: {a:1, b:2}
        // 函数写法
        // props: ($route) => {
        //     return {
        //         k1: $route.params.key,
        //         k2: $route.query.keyword
        //     }
        // }
    },
    {
        path: '/login',
        component: () => import('../pages/Login'),
        meta: {
            show: false
        }
    },
    {
        path: '/register',
        component: () => import('../pages/Register'),
        meta: {
            show: false
        }
    },
    {
        path: '/detail/:skuId',
        component: () => import('../pages/Detail'),
        meta: {
            show: false
        }
    },
    {
        path: '/addCartSuccess',
        component: () => import('../pages/AddCartSuccess'),
        meta: {
            show: true
        }
    },
]

const router = new VueRouter({
    base: '/',
    routes,
    // 当前项目问题：从搜索路由切换到详情路由，页面处于底部，想要页面处于顶部，就需要一些配置。
    scrollBehavior (to, from, savedPosition) {
        // 从搜索路由切换到详情路由，滚动条在最上方，即页面在顶部
        return { y: 0 }
    }
})

export default router