var db = require('./db.js');
var util = require('./utility.js');

module.exports = {
  user: {
    //GET method fetch all data from database 'perpetualHD'
    getAll: function (cb) {
      var query = 'select * from users';
      db.query(query, function (err, data) {
        //handle err with callback  
        if (err) {
          cb(err, null); 
        }
        console.log('data from db is', data[0]);
        //handle data with callback
        cb(null, data); 
      })
    },
    //GET method fetch specific username's data from database
    getOne: function (cb, username, password) {
      var query = 'select * from users where username=' + JSON.stringify(username);
      db.query(query, function (err, data) {
        //handle err with callback  
        if (err) {
          cb(err, null); 
        }
        if (util.validatePass(password, data.password)) {
          //sets session to user logging in
          req.session.username = username;
          req.session.save();
          console.log("# Session value set "+ req.session.username);
          //handle data with callback
          cb(null, data); 
        }
      })
    },  
    //POST method upload data from database 'perpetualHD'
    post: function (cb, data){
      data.password = util.hashPass(data.password);
      console.log('inside usermodel', data);
      // we may need refactor this base on the actual information of 'user'
      var query = 'insert into users set ?'; 
      db.query(query, data, function (err, dataReceived) {
        //handle error with callback 
        if (err) {
          cb(err, null);
        }
        //handle dataReceivd with callback
        cb(null, dataReceived); 
      })
    },
    //POST method updates data for specific user from database 'perpetualHD'
    update: function (cb, data) {
      //the data must have username as one of its property
      var query = 'update users set ? where username= :username';
      db.query(query, data, function (err, data) {
        //handle err with callback  
        if (err) {
          cb(err, null); 
        }
        //handle data with callback
        cb(null, data); 
      })
    }, 
  }
} 

