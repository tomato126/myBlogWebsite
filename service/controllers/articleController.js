/*
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-24 09:21:47
 * @LastEditors: Eureka
 * @LastEditTime: 2020-06-27 15:00:08
 */
var dbConfig = require('../utils/dbconfig');

//获取所有文章
getArticleList = (req, res) => {
  var sql = "select * from article";
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错了__获取所有文章')
    } else {
      res.send({
        'data': data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
}

//获取首页列表文章(根据前端传来的page来查找,关键词LIMIT)
getHomeArticleList = (req,res) =>{
  let {page} = req.query;
  
  var sql = "select id,artTitle,category,content,date_format( postdata, '%Y-%m-%d' ) AS postdata,viewNumber from article ORDER BY postdata DESC limit " + (page - 1) * 3 + ',' + '3';
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错了__获取首页列表文章')
    } else {
      res.send({
        'data': data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
}

//获取archive的数据
getArchive = (req, res) => {
  var sql = "select id,artTitle,date_format( postdata, '%Y-%m-%d' ) AS postdata,viewNumber from article ORDER BY postdata DESC";
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错了__获取archive的数据')
    } else {
       res.send({
        'data':data
      }) 
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
}

//获取文章详情
getArticleDetail = (req,res) => {
  let { id } = req.query;
  var sql = "select id,artTitle,category,tag,content,date_format( postdata, '%Y-%m-%d' ) AS postdata,viewNumber from article where id="+id;
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错了__获取详情页的数据')
    } else {
      res.send({
        'data': data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
}

module.exports = {
  getArticleList,
  getHomeArticleList,
  getArchive,
  getArticleDetail
}