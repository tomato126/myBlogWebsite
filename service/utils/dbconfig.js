/*
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-22 10:53:44
 * @LastEditors: Eureka
 * @LastEditTime: 2020-06-22 11:01:15
 */ 
const mysql = require('mysql')

module.exports = {
  //数据库配置
  config:{
    host:'localhost',
    port:'3307',
    user:'Eureka',
    password:'123456',
    database:'blog'
  },
  //链接数据库,使用mysql的连接池连接方式
  //连接池对象
  sqlConnect:function(sql,sqlArr,callBack){
    var pool = mysql.createPool(this.config)
    pool.getConnection((err,conn) => {
      console.log('数据库连接成功')
      if(err){
        console.log('数据库连接失败')
        return;
      }

      //事件驱动回调
      conn.query(sql,sqlArr,callBack);
      //释放连接
      conn.release();
    })
  }

}