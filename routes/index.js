var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/services', function(req, res, next){
	res.render('services');
});
router.get('/services/industrialrehab', function(req, res){
	res.render('industrialrehab');
});
module.exports = router;
