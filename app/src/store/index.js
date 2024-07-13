import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'
import detail from './Detail'
import shopCart from './ShopCart'
import user from './User'

Vue.use(Vuex)

export default new Vuex.Store( {
    modules: {
        home,
        search,
        detail,
        shopCart,
        user
    }
})