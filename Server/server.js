var express = require('express');
var router = require('./router.js');

var app = express(); 

<<<<<<< HEAD
//We may need middleware for express, such as body.parser

app.use(express.static(__dirname + '/../Client'));

// Setting up router for request 
app.use('/', router)

// Serving the 'client' folder
console.log(__dirname);
=======
//We may need middleware for express
app.use(express.static(__dirname + '/../Client'));

app.get('/', function(req, res){
  res.render('index')
})
>>>>>>> 4bab2bd75e9a3dae5d5fde788dc4dc3169a515fa


//We may need to set up routing base on our need


app.listen(3000); 
