var express = require('express');
var router = express.Router();
var firebase= require('firebase');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/newsletter', function(req, res){
	var database = firebase.database().ref('messages');
	 var messagesRef = database;
  messagesRef.on('value', function(snapshot){
  	console.log(snapshot.val());

})
})
module.exports = router;
