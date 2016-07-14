var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'root', 
  database: 'perpetualHD',
  password: 'hr44' 
});

connection.connect();

module.exports = connection;