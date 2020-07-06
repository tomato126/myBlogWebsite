/*
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-22 10:07:45
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-05 16:07:32
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


//category
var categoryController = require('../controllers/categoryController')
//获取每个分类对应的文章数
router.get('/fronted/category/getCategoryNum',categoryController.getCategoryNum)
//根据分类名获取文章
router.get('/fronted/category/getArticleByCategory',categoryController.getArticleByCategory)

//tag
var tagController = require('../controllers/TagController')
//获取数据库标签的名字列表
router.get('/fronted/tag/getTagName',tagController.getTagName)
//根据标签获取文章
router.get('/fronted/tag/getArticleByTag',tagController.getArticleByTag)


module.exports = router;
