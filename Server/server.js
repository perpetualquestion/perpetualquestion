var express = require('express');
var router = express.Router();

var app = express(); 

//We may need middleware for express


app.use(express.static(__dirname + '/../Client'));
console.log(__dirname);


//We may need to set up routing base on our need


app.listen(3000); 