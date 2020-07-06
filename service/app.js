/*
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-22 10:07:45
 * @LastEditors: Eureka
 * @LastEditTime: 2020-06-24 09:31:26
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var app = express();

//跨域
app.use(cors())


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//改写
var http = require('http');
var server = http.createServer(app);


app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//这个一定要放在跨域请求的后面，否则跨域不成功。
app.use('/', indexRouter);
app.use('/users', usersRouter);



/* 
//添加这个就解决了
app.use(cors ({
  origin: ['http://localhost:8080'], //指定接受的地址
  methods: ['GET','POST'], //指定接受的请求类型
  allowedHeaders:['Content-Type','Authorization'] //指定header
  })) */



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
/* app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}); */

//设置跨域访问
/* app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Credentials","true");
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', '*');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
}); */

server.listen('3000');
