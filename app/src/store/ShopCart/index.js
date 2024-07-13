import {reqCartList, reqDeleteCart, reqUpdateCart} from '@/api'

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
    },
    async deleteCart({commit}, skuId) {
        const res = await reqDeleteCart(skuId)
        if (res.code == 200) {
            return 'ok'
        } else {
            return new Promise(new Error('fail'))
        }
    },
    async updateCart({commit}, {skuId, isChecked}) {
        const res = await reqUpdateCart(skuId, isChecked)
        if (res.code == 200) {
            return 'ok'
        } else {
            return new Promise(new Error('fail'))
        }
    },
    deleteAllCheckedCart({dispatch, getters}) {
        let promiseAll = []
        const cartInfoList = getters.cardInfo.cartInfoList
        cartInfoList.forEach(item => {
            const pro = item.isChecked == 1 ? dispatch('deleteCart', item.skuId):''
            promiseAll.push(pro)
        })
        return Promise.all(promiseAll)
    },
    updateAllCheckCart({dispatch, getters}, isChecked) {
        let promiseAll = []
        const cartInfoList = getters.cardInfo.cartInfoList
        cartInfoList.forEach(item => {
            let pro = dispatch('updateCart', {skuId: item.skuId, isChecked: isChecked})
            promiseAll.push(pro)
        })
        return Promise.all(promiseAll)
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