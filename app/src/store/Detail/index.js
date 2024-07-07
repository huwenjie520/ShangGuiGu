import {reqDetailInfo} from '@a/index' 
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