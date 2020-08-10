/*
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-24 15:00:00
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-07 11:33:35
 */ 
var dbConfig = require('../utils/dbconfig');

//获取每个分类对应的文章数
getCategoryNum = (req, res) => {
   //var sql = "SELECT category, COUNT(*) as times FROM article GROUP BY category ORDER BY COUNT(*)";
  var sql = "select id,name,(select COUNT(*) from article where article.category=category.name)as times from category ORDER BY id"
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错了__获取每个分类对应的文章数')
    } else {
      res.send({
        'data': data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
}

//根据分类id获取文章列表
getArticleByCategory = (req,res) => {
  let { categoryId } = req.query;
  console.log(categoryId)
  var sql = "select * from article where category in (select name from category where id =" + categoryId+")"
  var sqlArr = []
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错了__根据分类名获取文章列表')
    } else {
      res.send({
        'data': data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack) 
}


//根据分类id获取文章列表并分页
getCategoryArticleList = (req, res) => {
  let {page ,categoryId} = req.query;
  console.log(categoryId)
  console.log(page)
  var sql = "select * from article where category =(select name from category where id =" + categoryId + ")" + "limit " + (page - 1) * 3 + ',' + '3' ;
  var sqlArr = []
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错了__根据分类id获取文章列表并分页')
    } else {
      res.send({
        'data': data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
}

module.exports = {
  getCategoryNum,
  getArticleByCategory,
  getCategoryArticleList
}
