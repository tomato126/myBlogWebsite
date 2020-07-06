/*
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-07-05 15:40:51
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-05 16:13:26
 */ 
var dbConfig = require('../utils/dbconfig');

//获取数据库标签的名字列表
getTagName = (req, res) => {
  var sql = "select * from tag ORDER BY id"
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错了__获取数据库标签的名字列表')
    } else {
      res.send({
        'data': data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
}


//根据标签搜索文章
getArticleByTag = (req,res) => {
  let { tagId } = req.query;
  var sql = "select * from article where tag in (select name from tag where id =" + tagId + ")"
  var sqlArr = []
  var callBack = (err,data) => {
    if(err) {
      console.log('连接出错了__根据标签搜索文章')
    }else {
      res.send({
        'data':data
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callBack)
}
module.exports = {
  getTagName,
  getArticleByTag
}