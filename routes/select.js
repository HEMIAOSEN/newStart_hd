var express = require('express');
var router = express.Router();
var selectController = require('../controller/select');
/* GET users listing. */
router.post('/',selectController.create);
router.get('/',selectController.find);
router.delete('/',selectController.putDelete);
router.put('/',selectController.putUpdate);
module.exports = router;
