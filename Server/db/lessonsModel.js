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
    update: function (cb, UserId, data) {
      //the data must have username as one of its property
      var query = 'update lessons set student_id=' + UserId + ' where teacher_id=' + data.teacher_id + ' and lesson=' + JSON.stringify(data.lesson);
      db.query(query, function (err, data) {
        //handle err with callback  
        if (err) {
          cb(err, null); 
        }
        //handle data with callback
        console.log('line 29 in lessonModel ', data);
        cb(null, data);
      });
    },
    getAll: function (cb, user_id){
      var query = "select * from lessons where teacher_id=" + user_id;
      db.query(query, function (err, data) {
        //handle err with callback  
        if (err) {
          cb(err, null); 
          console.log('------------here in the lessonsModel query encounter err: ' + err);
        }
        //handle data with callback
        cb(null, data); 
      })
    }  
  }
}; 

