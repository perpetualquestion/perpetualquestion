var db = require('./db.js');


module.exports = {
  user: {
    //Get method fetch data from database 'perpetualHD'
    get: function (cb){
      var query = 'select * from users';
      db.query(query, function (err, data) {
        //handle err with callback  
        if (err) {
          cb(err, null); 
        }
        //handle data with callback
        cb(null, data); 
      })
    }, 

    //Post method upload data from database 'perpetualHD'
    post: function (cb, data){
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
    } 
  }
} 

