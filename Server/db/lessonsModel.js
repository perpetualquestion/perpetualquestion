var db = require('./db.js');


module.exports = {
  lessons: {
    //Get method fetch data from database 'perpetualHD'
    get: function (cb){
      var query = 'select lessons.lesson from lessons';
      db.query(query, function (err, data) {
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

