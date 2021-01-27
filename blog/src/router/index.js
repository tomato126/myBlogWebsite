/*
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-18 18:38:45
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-05 16:35:14
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Archive = () => import('../views/archive/Archive')
const Code = () => import('../views/code/Code')
const About = () => import('../views/about/About')
const Category = () => import('../views/Category')
const articleDetail = () => import('../views/articleDetail.vue')

// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [

  {
    path: '/',
    name:'home',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/archive',
    name: 'archive',
    component: Archive
  },
  {
    path: '/code',
    name: 'code',
    component: Code
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/category/:category',
    name:'Category',
    component: Category
  },
  {
    path: '/article/:id',
    name:'articleDetail',
    component: articleDetail
  }
]

// 3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

// 4.导出
export default router
