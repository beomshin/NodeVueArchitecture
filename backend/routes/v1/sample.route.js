var express = require('express');
var  indexController  = require('../../controller/v1/test.cotroller');
var router = express.Router();


router.route('/').post(indexController.userIndexPage);

router.route('/test').post(indexController.test);

router.route('/test2').post(indexController.test2);

module.exports = router;