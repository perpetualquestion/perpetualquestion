var express = require('express');
var router = require('./router.js');

var app = express(); 

//We may need middleware for express, such as body.parser


// Setting up router for request 
app.use('/', router)

// Serving the 'client' folder
app.use(express.static(__dirname + '/../Client'));
console.log(__dirname);


//We may need to set up routing base on our need


app.listen(3000); 