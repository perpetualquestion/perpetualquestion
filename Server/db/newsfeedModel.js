var db = require('./db.js');

module.exports = {

	 //  user: {
  //   //Get method fetch data from database 'perpetualHD'
  //   get: function (cb){
  //     var query = 'select * from users';
  //     db.query(query, function (err, data) {
  //       //handle err with callback  
  //       if (err) {
  //         cb(err, null); 
  //       }
  //       //handle data with callback
  //       cb(null, data); 
  //     })
  //   }, 

  //   //Post method upload data from database 'perpetualHD'
  //   post: function (cb, data){
  //     // we may need refactor this base on the actual information of 'user'
  //     var query = 'insert into users ?'; 
  //     db.query(query, data, function (err, dataReceived) {
  //       //handle error with callback 
  //       if (err) {
  //         cb(err, null);
  //       }
  //       //handle dataReceivd with callback 
  //       cb(null, dataReceived); 
  //     })
  //   } 
  // },

	newsfeed: {
		//Get method fetch dat from 'newsfeeds' table from 'perpetualHD' database
		get: function(cb, username) {
			var query = 'select * from newsfeeds where receiver=' + JSON.stringify(username);
			db.query(query, function (err, data) {
				//handle error with callback
				if(err) {
					cb(err, null);
				}
				//handle data with callback
				cb(null, data);
			})
		}, 

		//Post method upload data from 'newfees' table from 'perpetualHD' database
		post: function(cb, data) {
			//We may need to modifiled the insertion query below depends on our needs
			var query = 'insert into newsfeeds ?';
			db.query(query, data, function (err, dataReceived) {
				//handle error with callback
				if(err) {
					cb(err, null);
				}
				//handle error with callback
				cb(null, dataReceived);
			}) 			
		}	
	}
}