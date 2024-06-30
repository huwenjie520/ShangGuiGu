import {reqGetSearchInfo} from '@/api'

const state = {
    searchInfo: {}
}
const mutations = {
    GETSEARCHINFO(state, data) {
        state.searchInfo = data
    }
}
const actions = {
    async getSearchInfo({commit}, params) {
        let res = await reqGetSearchInfo(params)
        if (res.code === 200) {
            commit('GETSEARCHINFO', res.data)
        }
    }
}
const getters = {
    attrsList() {
        return state.searchInfo.attrsList
    },
    goodsList() {
        return state.searchInfo.goodsList
    },
    trademarkList() {
        return state.searchInfo.trademarkList
    }
}

export default {
    state, 
    mutations,
    actions,
    getters
}