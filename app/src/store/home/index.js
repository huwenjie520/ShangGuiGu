import {reqCategoryList, reqGetBannerList} from '@/api'

const state = {
    categoryList: [],
    bannerList: []
}
const mutations = {
    CATEGORYLIST(state, list) {
        state.categoryList = list
    },
    BANNERLIST(state, list) {
        state.bannerList = list
    }
}
const actions = {
    async categoryList({commit}) {
        let res = await reqCategoryList()
        if (res.code === 200) {
            commit('CATEGORYLIST', res.data)
        }
    },
    async bannerList({commit}) {
        let res = await reqGetBannerList()
        if (res.code = 200) {
            commit('BANNERLIST', res.data)
        }
    }
}
const getters = {}

export default {
    state, 
    mutations,
    actions,
    getters
}