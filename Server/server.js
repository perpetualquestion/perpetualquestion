var express = require('express');
var router = require('./router.js');

var app = express(); 

//We may need middleware for express, such as body.parser

// Serving the 'client' folder
app.use(express.static(__dirname + '/../Client'));
// Setting up router for request 
app.use('/', router);

//We may need middleware for express

//check router.js to check how each endpoint is being handled
app.get('/', function(req, res){
  res.render('index');
});
app.get('/newsfeed', router);
app.post('/newsfeed', router);

app.get('/search', router);


console.log("Listening to port 3000...");

//We may need to set up routing base on our need

app.listen(3000); 
