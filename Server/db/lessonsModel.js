var db = require('./db.js');


module.exports = {
  lessons: {
    //Get method fetch data from database 'perpetualHD'
    get: function (cb, lesson){
      var query = "select u.firstname, u.lastname, l.lesson from users u, lessons l where u.id=l.user_id and l.lesson like " + JSON.stringify('%' + lesson + '%');
      db.query(query, function (err, data) {
        //handle err with callback  
        if (err) {
          cb(err, null); 
          console.log('------------here in the lessonsModel query encounter err: ' + err);
        }
        //handle data with callback
        cb(null, data); 
      })
    }, 
  }
} 

