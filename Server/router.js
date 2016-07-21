var express = require('express'); 
var router = express.Router();
// var controller = require('')
var User = require('./db/userModel');


//To Do: 
// (1) need to refactor the "url" after the skeleton of the app is complete
// (2) more routes may need if we expand our apps
router.get('/', function(req, res){
  res.render('index');
});

router.get('/signin', function(req,res){
  res.render('signin');
});

router.post('/login', passportAuthenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));

router.get('/signup', function(req,res){
  res.render('signup');
});

router.get('/profile', isLoggedin, function(req, res){
  res.render('profile', { user: req.user });
});

router.post('/signup', passport.authentication('local-signup', {
  successRedirect: '/',
  failureRedirect: 'signup',
  failureFlash: true
}));


//checks if user is logged in
var isLoggedIn = function(req, res, next){
  if (req.isAuthentiated()){
    return next();
  } 
  
  res.redirect('login');
};


// User get method, for fetch users information? 
// router.get('/users', controller.users.get);

// User post method, for users sign up? 
// router.post('/users', controller.users.post); 

// newsFeeds get method, for fetch newFeeds to website? 
// router.get('/newsfeeds', controller.newsfeeds.get); 

// newsFedds post method, for posting / updating user's information
// router.post('/newsfeeds', controller.newsfeeds.post);

module.exports = router; 
