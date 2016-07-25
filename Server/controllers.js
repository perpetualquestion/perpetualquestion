var userModel = require ('./db/userModel.js');
var newsfeedModel = require('./db/newsfeedModel.js');
var lessonsModel = require('./db/lessonsModel.js');

module.exports = {
	users: {
		// getAll: function (req, res) {
		// 	userModel.user.getAll(function (err, dataReceived) {
		// 		if(err){
		// 			//To Do: we can decide error handling later	
		// 		}
		// 		res.json(dataReceived);
		// 	});
		// },
		getOne: function (req, res) {
			// console.log("session name", req.session.username);
			// console.log("request query", req.query);
			if (req.session.username !== undefined) {
				userModel.user.getOne(function (err, dataReceived) {
					if(err){
						//To Do: we can decide error handling later	
					}
					// console.log('data received for profile is:' + dataReceived[0]);
					res.json(dataReceived);
				//Username pass in from Helper.js. Data is stored in request query for GET request.
				}, req.session.username);				
			} else if (req.query.username !== undefined) {
				userModel.user.getOne(function (err, dataReceived) {
					if(err) { }; 
					//check password;
					console.log('data received for signin', dataReceived);
					if( dataReceived.length != 0 && dataReceived[0].password === req.query.password) {
						req.session.id = dataReceived[0].id;
						req.session.username = req.query.username;
						console.log('sucess log in');
						res.redirect('/#/search');
					} else {
						res.json("ERROR")
					}
				}, req.query.username);
			} else {
				res.redirect('/signin');
			}
		},
		post: function (req, res) {
			//Data is stored in the request body for POST request.
			var dataPosted = req.body;
			console.log('inside controller', dataPosted);
			userModel.user.post(function (err, dataReceived) {
				if(err){
					//To Do: we can decide how to handle error later
				}
				req.session.id = dataReceived.insertId;
				req.session.username = req.body.username;
				console.log('request session', dataReceived.insertId);
				res.redirect('/search');

			}, dataPosted);
		}, 
		signout: function (req, res) {
			req.session.destroy(function (err) {
				if (err) { 
					return err; 
				} else {
					res.redirect('/signin');
				}
			})
		}
	}, 

	// newsfeed: {
	// 	get: function (req, res) {
	// 		newsfeedModel.newsfeed.get(function (err, dataReceived) {
	// 			if (err) {
	// 				//To Do: we can decide how to handle erro later
	// 			}
	// 			res.json(dataReceived);
	// 			//Username pass in from Helper.js. Data is stored in request query for GET request.
	// 		}, req.query.username);
	// 	}, 
	// 	post: function (req, res) {
	// 		var dataPosted = req.query;
	// 		newsfeedModel.newsfeed.post(function (err, dataReceived) {
	// 			if(err) {
	// 				//To Do: we can decide how to handle error later
	// 			}
	// 			res.sendStatus(201);
	// 		}, dataPosted)			
	// 	}
	// },

	search: {
		get: function (req, res) {
			lessonsModel.lessons.get(function (err, dataReceived) {
				if (err) {
					//To Do: we can decide how to handle erro later
					console.log('==========controller cb encounter error========>');
				}
				res.json(dataReceived);
				//Username pass in from Helper.js
			}, req._parsedUrl.query);
		},
		update: function(req, res) {
			console.log('hasdjasd ', req.body, req.session);
			if (req.session.username !== undefined) {
				lessonsModel.lessons.update(function (err, dataReceived) {
					if(err){
						//To Do: we can decide error handling later	
					}
					// console.log('data received for profile is:' + dataReceived[0]);
					res.json(dataReceived);
				//Username pass in from Helper.js. Data is stored in request query for GET request.
				}, req.session.username, req.body);				
			} else {
				res.redirect('/');
			}
		},
		getAll: function (req, res) {
			console.log(req.query, req.session);
			lessonsModel.lessons.get(function (err, dataReceived) {
				if (err) {
					//To Do: we can decide how to handle erro later
					console.log('==========controller cb encounter error========>');
				}
				res.json(dataReceived);
				//Username pass in from Helper.js
			}, req.session.id);
		}
	}
}; 



