var express = require('express');
var router = express.Router();
const userController = require('../../controller/user.controller')

/* GET users listing. */
router.get('/test', function(req, res, next) {

    var testData = {
        name : 'beom'
    }

   console.log(testData);

   res.json(testData);
});

router.post('/', (req, res, next) => {

    var param = req.body.name;

    console.log(param);

    var resData = {
        name : 'beom'
    }

    res.json(resData);

});

router.get('/change', (req, res, next) => {

    var resData = {
        name : "shin"
    }

    res.json(resData);

})

router.get('/change2', (req, res, next) => {

    var resData = {
        name : "shin2"
    }

    res.json(resData);

})

router.route('/enroll').post(userController.userEnrollApi)

module.exports = router;
