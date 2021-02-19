var express = require('express');
var path = require('path');
var v1Router = require('./v1');

const router = express.Router();

router.use('/v1', v1Router)

module.exports = router;