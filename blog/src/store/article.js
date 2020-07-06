/*
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-23 10:01:47
 * @LastEditors: Eureka
 * @LastEditTime: 2020-06-23 10:05:39
 */ 
export const state = () => ({
  //首页文章列表
  list: {}
})

export const mutations = {
  //首页文章列表
  GET_ART_SUCCESS(state,data) {
    state.list = data
  }
}