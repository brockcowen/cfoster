var express = require('express');
var router = express.Router();
var firebase= require('firebase');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// test to verify firebase connect


router.post('/newsletter', function(req, res, next){
	var database = firebase.database().ref('newsletterSignup')
	var newsletterSignupKey= firebase.database().ref().child('newsletterSignup').push().key;
var postData = {
	email: 'testdata'
}
	var updates = {};
	updates['/newsletterSignup/' + newsletterSignupKey ] = postData;
	updates['/emailList']= postData.email;
 return firebase.database().ref().update(updates);

})

module.exports = router;
