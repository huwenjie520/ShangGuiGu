import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


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
        path: '/search',
        component: () => import('../pages/Search'),
        meta: {
            show: true
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