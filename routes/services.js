var express = require('express');
var router = express.Router();

router.use(express.static('public'));

router.get('/', function(req, res, next){
	res.render('services');
});
router.get('/industrialrehab', function(req, res){
	res.render('industrialrehab');
});
router.get('')
module.exports = router;