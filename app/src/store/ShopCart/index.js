import {reqCartList} from '@/api'

const state = {
    shopCartList: []
}
const mutations = {
    SHOPCARTDATA(state, data) {
        state.shopCartList = data
    }
}
const actions = {
    async getShopCartData({commit}) {
        const res = await reqCartList()
        if (res.code == 200) {
            commit('SHOPCARTDATA', res.data)
        }
    }
}
const getters = {
    cardInfo(state) {
        return state.shopCartList[0] || {}
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}