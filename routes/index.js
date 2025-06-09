var express = require('express');
var router = express.Router();
var selectRouter = require('./select');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//这个优先级高一些 一级路由
router.use('/select',selectRouter);

module.exports = router;
