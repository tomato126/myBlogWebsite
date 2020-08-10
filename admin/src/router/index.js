/*
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-07-08 09:49:58
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-08 10:04:36
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../view/Main.vue'
import ArticleAdd from '../view/ArticleAdd.vue'
// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [

  {
    path: '/',
    name: 'Main',
    redirect: '/Main'
  },
  {
    path: '/Main',
    name: 'Main',
    component: Main,
    children: [
      { path: '/article/add', component: ArticleAdd}
    ]
  },
]

// 3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

// 4.导出
export default router