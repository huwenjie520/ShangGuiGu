import axios from 'axios'

// 将baseUrl改为mock
const mockRequests = axios.create({
    baseURL: '/mock',
    timeout: 5000
})

// 请求拦截器:
mockRequests.interceptors.request.use((config) => {
    console.log(222, config)
    return config
})

// 响应拦截器
mockRequests.interceptors.response.use((res) => {
    // 响应成功的回调函数
    return res.data
}, (err) => {
    // 响应失败的回调函数
    return Promise.reject(new Error('fail'))
})

export default mockRequests
