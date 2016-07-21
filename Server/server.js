var express = require('express');
var app = express(); 
var router = require('./router.js');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');

app.use(express.static(__dirname + '/../Client'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: 'thereisnocowlevel',
  saveUnitialized: true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', router);

var port = 3000;

app.listen(port);
console.log('Server is running on port: ' + port)
