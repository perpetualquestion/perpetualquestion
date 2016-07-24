var express = require('express');
var router = require('./router.js');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express(); 

//We may need middleware for express, such as body.parser

// Serving the 'client' folder
app.use(express.static(__dirname + '/../Client'));
// Setting up router for request 
app.use('/', router);
app.use(cookieParser());
app.use(session({
  secret: 'supersecretstring',
  saveUninitialized: true,
  resave: true
}));
//We may need middleware for express

//check router.js to check how each endpoint is being handled
app.get('/', function(req, res){
  //checks if session has been created
  if (req.session.username == undefined) {
    console.log("# Username not set in session yet");
  } else {
    console.log("# Username from session: "+ req.session.username);
  }
  res.render('index');
});
app.get('/newsfeed', router);
app.post('/newsfeed', router);

app.get('/search', router);


console.log("Listening to port 3000...");

//We may need to set up routing base on our need

app.listen(3000); 
