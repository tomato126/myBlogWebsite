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

//获取所有分类
getAllCategory = (req, res) => {
    var sql = "select * from category"
    var sqlArr = []
    var callBack = (err, data) => {
        if (err) {
            console.log('出错了---获取所有分类', err)
        } else {
            res.send({
                'data': data
            })
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack)
}

// 修改分类名
modifyCategoryName = (req, res) => {
    let query = req.body
    var sql = `update blog.category set name = (?) where id = (?)`
    var sqlArr = [ query.name ,query.id];
    var callBack = (err, data) => {
        if (err) {
            res.send({
                code: 0,
                data: {
                msg: '编辑失败~'
                }
            })
            console.log('连接出错了__修改分类名', err)
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


//新增分类名
addCategory = (req, res) => {
    let query = req.body
    var sql = `insert into blog.category (name, status) values (?,?)`
    var sqlArr = [query.name, 1];
    var callBack = (err, data) => {
        if (err) {
            res.send({
                code: 0,
                data: {
                msg: '新增失败~'
                }
            })
            console.log('连接出错了__新增分类名', err)
        } else {
            res.send({
                code: 1,
                data: {
                msg: '新增分类名成功~'
                }
            })
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack)
}

module.exports = {
  getCategoryNum,
  getArticleByCategory,
  getCategoryArticleList,
  getAllCategory,
  modifyCategoryName,
  addCategory
}
