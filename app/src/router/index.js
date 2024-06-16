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
        meta: {
            show: true
        }
    },
    {
        name: 'search',
        // ？表示key参数可传可不传，如果不加？，那么必须要通过params方式传递key参数
        path: '/search/:key?',
        component: () => import('../pages/Search'),
        meta: {
            show: true
        },
        // 布尔值写法
        // props: true
        // 对象写法
        // props: {a:1, b:2}
        // 函数写法
        props: ($route) => {
            return {
                k1: $route.params.key,
                k2: $route.query.keyword
            }
        }
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
]

const router = new VueRouter({
    base: '/',
    routes
})

export default router