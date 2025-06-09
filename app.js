var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
const multer = require('multer')

var cors = require('cors');
//数据库的一个主文件
require('./models');

var app = express();

app.use(cors());

//上传文件的配置
app.use(multer({dest:'./public/uploads'}).any())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//路由的主文件配置
app.use('/', indexRouter);

module.exports = app;
