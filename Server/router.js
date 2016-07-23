var express = require('express'); 
var router = express.Router();
var controller = require('./controllers.js');
var bodyParser = require('body-parser');


//body-parser is need to received data being passed in from ajax request
//We may or may not need the bodyParser.json(). But it works without it. -Hien 
// router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

// router.use(bodyParser.json());

//To Do: 
// (1) need to refactor the "url" after the skeleton of the app is complete
// (2) more routes may need if we expand our apps
router.get('/', function(req, res){
  res.render('index');
})

router.get('/search', controler.users.get);
// User get method, for fetch users information? 
// router.get('/users', controller.users.get);

// User get method for users sign in.
router.get('/signin', controller.users.get);
// User post method for users sign up. 
router.post('/signup', controller.users.post); 

router.get('/profile', controller.users.get)


// newsFeeds get method, for fetch newFeeds to website
router.get('/newsfeed', controller.newsfeed.get);

// newsFedds post method, for posting / updating user's information
// router.post('/newsfeed', controller.newsfeeds.post);

// get method for fetch search list
// controller.js 
router.get('/search', function(req, res) {
  controller.search.get(req, res);
});


module.exports = router; 
