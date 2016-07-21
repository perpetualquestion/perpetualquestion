var express = require('express');
var router = require('./router.js');

var app = express(); 

//We may need middleware for express, such as body.parser

app.use(express.static(__dirname + '/../Client'));
// Setting up router for request 
app.use('/', router)

// Serving the 'client' folder
console.log(__dirname);
//We may need middleware for express

//check router.js to check how each endpoint is being handled
app.get('/', function(req, res){
  res.render('index')
})
app.get('/newsfeed', router);
app.post('/newsfeed', router);



//We may need to set up routing base on our need


app.listen(3000); 
