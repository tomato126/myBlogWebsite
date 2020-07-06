/*
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-22 17:43:50
 * @LastEditors: Eureka
 * @LastEditTime: 2020-06-23 10:06:09
 */ 
import service from '../network'

const CURRENT_PAGE = 1

export const actions = {
  //获取文章首页列表
  async getAllArtList({ commit, state }, params) {
    let postParam = {
      currentPage: params.currentPage
    }
    const res = await service.getArticleAll(postParam).catch(err => {
      console.log(err)
    })
    if (res && res.code === 200) {
      commit('article/GET_ART_SUCCESS', res)
    }
  }

}
