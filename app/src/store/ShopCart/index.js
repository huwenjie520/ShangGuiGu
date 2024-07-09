import {reqCartList} from '@/api'

const state = {
}
const mutations = {}
const actions = {
    async getShopCartData({commmit}) {
        const res = await reqCartList()
        console.log(111, res)
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}