import {reqGetCode, reqUserRegister} from '@/api'

const state = {
    code: ''
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    }
}
const actions = {
    async getCode({commit}, phone) {
        const res = await reqGetCode(phone)
        if (res.code == 200) {
            commit('GETCODE', res.data)
        }
    },
    async userRegister({commit},user) {
        // 向服务器发请求，后端将用户账号和密码存入数据库。
        let result = await reqUserRegister(user)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'));
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