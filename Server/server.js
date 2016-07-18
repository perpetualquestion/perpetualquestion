var express = require('express'); 

var app = express(); 

//We may need middleware for express
app.use(express.static(__dirname + '/../Client'));

app.get('/', function(req, res){
  res.render('index')
})


//We may need to set up routing base on our need


app.listen(3000); 
