import requests from './request'
import mockRequests from './mockRequest'

// 使用 reqCategoryList 变量来保存 匿名函数对象
// axios 返回的是一个 Promise对象
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'})
// 获取轮播图图片
export const reqGetBannerList = () => mockRequests({url: '/banner', method: 'get'})
// 获取floor组件数据
export const reqGetFloorList = () => mockRequests({url: '/floor', method: 'get'})
// 获取搜索页数据
export const reqGetSearchInfo = (params) => requests({url: '/list', method: 'post', data: params})