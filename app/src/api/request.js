import axios from 'axios'
import store from '@/store'

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})

// 请求拦截器:
requests.interceptors.request.use((config) => {
    if (store.state.detail.uuid) {
        // 请求头添加一个字段：userTempId：游客身份uuid，此字段已和后端协商好了
        // config.headers.userTempId = store.state.detail.uuid
        config.headers.userTempId = '3882d940-c10a-46cf-bb0a-6c25057b17';
    }
    return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    // 响应成功的回调函数
    return res.data
}, (err) => {
    // 响应失败的回调函数
    return Promise.reject(new Error('fail'))
})

export default requests
