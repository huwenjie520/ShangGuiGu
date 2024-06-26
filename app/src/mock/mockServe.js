import Mock from 'mockjs'

// [JSON数据格式根本没有对外暴露，但是可以引入]，因为 webpack默认对外暴露的：图片、JSON数据格式
import banner from './banner.json'

// mock数据:第一个参数：请求地址，（如果请求地址匹配上/mock/banner，则返回第二个参数）   第二个参数：请求数据（200代表请求成功，data代表数据）
Mock.mock('/mock/banner', {
    code: 200,
    data: banner
})