var db = require('./db.js');


module.exports = {
  lessons: {
    //Get method fetch data from database 'perpetualHD'
    get: function (cb, lesson){
      var query = "select u.firstname, u.lastname, l.lesson, l.teacher_id from users u, lessons l where u.id=l.teacher_id and l.lesson like " + JSON.stringify('%' + lesson + '%');
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
    update: function (cb, data) {
      //the data must have username as one of its property
      var query = 'update lesson set ? where (teacher_id= :teacher_id and lesson=:lesson)';
      db.query(query, data, function (err, data) {
        //handle err with callback  
        if (err) {
          cb(err, null); 
        }
        //handle data with callback
        cb(null, data);
      });
    }  
  }
}; 

