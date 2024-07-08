import {reqDetailInfo, reqAddCartSuccess} from '@a/index' 
const state = {
    goodsInfo: {}
}
const mutations = {
    GETDETAILINFO(state, data) {
        state.goodsInfo = data
    }
}
const actions = {
    async getDetailInfo({commit}, skuId) {
        const res = await reqDetailInfo(skuId)
        if (res.code === 200) {
            commit('GETDETAILINFO', res.data)
        }
    },
    async addCartSuccess({commit}, {skuId, skuNum}) {
        const res = await reqAddCartSuccess(skuId, skuNum)
        if (res.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    }
}
const getters = {
    categoryView(state) {
        return state.goodsInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodsInfo.spuSaleAttrList || {}
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}