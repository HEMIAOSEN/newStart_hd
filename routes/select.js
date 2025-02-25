var express = require('express');
var router = express.Router();
var selectController = require('../controller/select');

/* GET users listing. */
router.post('/',selectController.create);
router.get('/',selectController.find);
// 添加分页路由
router.get('/limit',selectController.findPage);
router.delete('/',selectController.putDelete);
router.put('/',selectController.putUpdate);

module.exports = router;
