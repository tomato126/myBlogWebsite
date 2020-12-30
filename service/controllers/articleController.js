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
  var sql = "select * from article order by postdata desc";
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

//增加文章
addArticle = (req, res) => {
    let query = req.body
    //console.log(query)
    var sql = `insert into blog.article ( category, content, viewNumber, id, status, tag, artTitle, postdata) values (?,?,?,?,?,?,?,?)`
    var sqlArr = [query.category, query.content, query.viewNumber, query.id, query.status, query.tag, query.artTitle, query.postdata];
    var callBack = (err, data) => {
        if (err) {
            res.send({
                code: 0,
                data: {
                msg: '发布失败~'
                }
            })
            console.log('连接出错了__新增文章', err)
        } else {
            res.send({
                code: 1,
                data: {
                msg: '发布成功~'
                }
            })
        }
    }

dbConfig.sqlConnect(sql, sqlArr, callBack)
}

//编辑文章
editArticle = (req, res) => {
    let query = req.body
    //console.log(query)
    var sql = `update blog.article set category = (?), content = (?), viewNumber = (?), status = (?), tag = (?), artTitle = (?), postdata = (?) where id = (?)`
    var sqlArr = [query.category, query.content, query.viewNumber, query.status, query.tag, query.artTitle, query.postdata, query.id];
    var callBack = (err, data) => {
        if (err) {
            res.send({
                code: 0,
                data: {
                msg: '编辑失败~'
                }
            })
            console.log('连接出错了__编辑文章', err)
        } else {
            res.send({
                code: 1,
                data: {
                msg: '编辑成功~'
                }
            })
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack)
}

//删除文章
deleteArticle = (req, res) => {
    let query = req.body
    //console.log(query)
    var sql = `delete from blog.article where id = (?)`
    var sqlArr = [query.id]
    var callBack = (err, data) => {
        if (err) {
            res.send({
                code: 0,
                data: {
                msg: '删除失败~'
                }
            })
            console.log('连接出错了__编辑文章', err)
        } else {
            res.send({
                code: 1,
                data: {
                msg: '删除成功~'
                }
            })
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack)
}

module.exports = {
  getArticleList,
  getHomeArticleList,
  getArchive,
  getArticleDetail,
  addArticle,
  editArticle,
  deleteArticle
}