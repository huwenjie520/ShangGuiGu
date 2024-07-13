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
// 获取详情页数据
export const reqDetailInfo = (skuId) => requests({url: `/item/${skuId}`, method: "get"})
// 添加到购物车
export const reqAddCartSuccess = (skuId, skuNum) => requests({url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post'})
// 获取购物车列表
export const reqCartList = () => requests({url: '/cart/cartList', method: 'get'})
// 删除某个商品
export const reqDeleteCart = (skuId) => requests({url: `/cart/deleteCart/${skuId}`, method: 'delete'})
// 修改某个产品状态
export const reqUpdateCart = (skuId, isChecked) => requests({url: `/cart/checkCart/${skuId}/${isChecked}`, methods: 'get'})
// 获取验证码
export const reqGetCode = (phone) => requests({url: `/user/passport/sendCode/${phone}`, methods: 'get'})
// 用户注册
export const reqUserRegister = (data) => requests({url: '/user/passport/register', method: 'post', data})
