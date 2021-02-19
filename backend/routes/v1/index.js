var express = require('express');
var path = require('path');
var fs = require('fs');

const basename = path.basename(__filename);
const router = express.Router();

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-9) === '.route.js'))
  .forEach(routeFile => router.use(`/${routeFile.split('.')[0]}`, require(`./${routeFile}`)))


module.exports = router;