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

import Login from '../view/Login.vue'
import Main from '../view/Main.vue'
import postBlog from '../view/PostBlog.vue'
import editBlog from '@/view/EditBlog'

// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [

	{
		path: '/',
		name: 'Login',
		redirect: '/Login'
	},
	{
		path: '/Login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/manage',
		name: 'manage',
		component: Main,
		children: [
			{
				path: '/blogs',
				name: 'blogs',
				component: () => import('@/view/BlogManage'),
			},
			{
				path: '/categories',
				name: 'categories',
				component: () => import('@/view/CategoriesManage'),
			},
			{
				path: '/tags',
				name: 'tags',
				component: () => import('@/view/TagsManage'),
			},
			{
				path: '/albums',
				name: 'albums',
				component: () => import('@/view/AlbumsManage'),
			},
			{
				path: '/postBlog',
				name: 'postBlog',
				component: postBlog,
			},
			{
				path: '/editBlog',
				name: 'editBlog',
				component: editBlog
			}
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