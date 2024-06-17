import requests from './request'

// 使用 reqCategoryList 变量来保存 匿名函数对象
// axios 返回的是一个 Promise对象
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'})