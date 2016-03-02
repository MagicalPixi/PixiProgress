var express = require('express');
var router = express.Router();
var env = process.env.NODE_ENV
env = env?env:'development'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/progress', function(req, res, next) {
  res.render('progress', {env: env})
})

module.exports = router;
