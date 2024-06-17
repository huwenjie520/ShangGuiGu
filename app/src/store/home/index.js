import {reqCategoryList} from '@/api'

const state = {
    categoryList: []
}
const mutations = {
    CATEGORYLIST(state, list) {
        state.categoryList = list
    }
}
const actions = {
    async categoryList({commit}) {
        let res = await reqCategoryList()
        if (res.code === 200) {
            commit('CATEGORYLIST', res.data)
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