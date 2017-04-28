var express = require('express');
var router = express.Router();

router.use(express.static('public'));

router.get('/', function(req, res, next){
	res.render('services');
});
router.get('/industrialrehab', function(req, res){
	res.render('industrialrehab');
});
router.get('/spineclinic', function(req, res){
	res.render('spineclinic')
})
router.get('/physicaltherapy', function(req, res){
	res.render('physicaltherapy')
})
router.get('/psych', function(req, res){
	res.render('psych')
})
router.get('/sports', function(req, res){
	res.render('sports')
})
module.exports = router;