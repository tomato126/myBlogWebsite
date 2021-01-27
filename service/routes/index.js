/*
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-22 10:07:45
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-07 10:33:30
 */ 
var express = require('express');
var router = express.Router();

//article
var articleController = require('../controllers/articleController')
//获取所有文章
router.get('/fronted/article/getArticleList', articleController.getArticleList)
//获取首页列表文章(根据前端传来的page来查找,关键词LIMIT)
router.get('/fronted/article/getHomeArticleList', articleController.getHomeArticleList)
//获取归档数据
router.get('/fronted/article/getArchive',articleController.getArchive)
//获取详情页数据
router.get('/fronted/article/getDetail', articleController.getArticleDetail)

//新增文章
router.post('/fronted/article/add', articleController.addArticle)
//编辑文章
router.post('/fronted/article/edit', articleController.editArticle)
//删除文章
router.post('/fronted/article/delete', articleController.deleteArticle)
//根据条件查询文章
router.post('/fronted/article/getArticleByQuery', articleController.getArticleByQuery)


//category
var categoryController = require('../controllers/categoryController')
//获取每个分类对应的文章数
router.get('/fronted/category/getCategoryNum',categoryController.getCategoryNum)
//根据分类名获取文章
router.get('/fronted/category/getArticleByCategory',categoryController.getArticleByCategory)

router.get('/fronted/category/getCategoryArticleList',categoryController.getCategoryArticleList)

//获取所有分类
router.get('/fronted/category/getAllCategory', categoryController.getAllCategory)
//修改分类名
router.post('/fronted/category/modify', categoryController.modifyCategoryName)
//新增分类名
router.post('/fronted/category/add', categoryController.addCategory)



module.exports = router;
