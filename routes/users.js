var express = require('express');
var router = express.Router();
var firebase = require('firebase')


var fbconfig = {
    apiKey: "[APIKey]",
    authDomain: "[authDomain]",
    databaseURL: "[databaseURL]",
    projectId: "[projectId]",
    storageBucket: "[storageBucket]",
    messagingSenderId: "[messagingSenderId]"
};
firebase.initializeApp(fbconfig)
/* GET users listing. */
router.get('/', function(req, res, next) {
	var database = firebase.database().ref('messages');
  res.send('respond with a resource');
  var messagesRef = database;
  messagesRef.on('value', function(snapshot){
  	console.log(snapshot.val());
  })
  
});

module.exports = router;
