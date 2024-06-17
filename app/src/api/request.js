import axios from 'axios'

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})

// 请求拦截器:
requests.interceptors.request.use((config) => {
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