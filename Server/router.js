var express = require('express'); 
var router = express.Router();
var controller = require('./controllers.js');

//To Do: 
// (1) need to refactor the "url" after the skeleton of the app is complete
// (2) more routes may need if we expand our apps
router.get('/', function(req, res){
  res.render('index');
})
// User get method, for fetch users information? 
// router.get('/users', controller.users.get);

// User post method, for users sign up? 
// router.post('/users', controller.users.post); 

// newsFeeds get method, for fetch newFeeds to website?
// controller.js 
router.get('/newsfeed', function(req, res) {
  controller.newsfeed.get(req, res);
});

// newsFedds post method, for posting / updating user's information
// router.post('/newsfeed', controller.newsfeeds.post);

module.exports = router; 
