var express = require('express'); 

var app = express(); 

//We may need middleware for express


app.use(express.static(__dirname + '../Client'))


//We may need to set up routing base on our need


app.listen(3000); 