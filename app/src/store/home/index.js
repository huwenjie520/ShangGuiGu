import {reqCategoryList, reqGetBannerList, reqGetFloorList} from '@/api'

const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}
const mutations = {
    CATEGORYLIST(state, list) {
        state.categoryList = list
    },
    BANNERLIST(state, list) {
        state.bannerList = list
    },
    FLOORLIST(state, list) {
        state.floorList = list
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
    },
    async floorList({commit}) {
        let res = await reqGetFloorList()
        if (res.code === 200) {
            commit('FLOORLIST', res.data)
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