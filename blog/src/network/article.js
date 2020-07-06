/*
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-23 12:57:13
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-05 16:47:51
 */ 
import { request } from "./request";
//所有文章页面
export function getArticleList() {
  return request({
    url: '/article/getArticleList'
  })
}
//首页展示页面
export function getHomeArticleList(page) {
  return request({
    url: '/article/getHomeArticleList',
    params: {
      page
    }    
  })
}

//归档数据
export function getArchive() {
  return request({
    url:'/article/getArchive'
  })
}

//获取文章详细页
export function getArticleDetail(id) {
  return request({
    url:'/article/getDetail',
    params: {
      id
    }
  })
}

//获取所有分类对应的文章数
export function getCategoryNum() {
  return request({
    url:'/category/getCategoryNum'
  })
}

//根据分类搜索文章
export function getArticleByCategory(categoryId) {
  return request({
    url:'/category/getArticleByCategory',
    params: {
      categoryId
    }
  })
}

//查询所有标签的名字
export function getTagName() {
  return request({
    url:'/tag/getTagName'
  })
}

//根据标签搜索文章
export function getArticleByTag(tagId) {
  return request({
    url: '/tag/getArticleByTag',
    params: {
      tagId
    }
  })
}