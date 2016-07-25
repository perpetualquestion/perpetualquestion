var userModel = require ('./db/userModel.js');
var newsfeedModel = require('./db/newsfeedModel.js');
var lessonsModel = require('./db/lessonsModel.js');

module.exports = {
	users: {
		getAll: function (req, res) {
			userModel.user.getAll(function (err, dataReceived) {
				if(err){
					//To Do: we can decide error handling later	
				}
				res.json(dataReceived);
			});
		},
		getOne: function (req, res) {
			userModel.user.getOne(function (err, dataReceived) {
				if(err){
					//To Do: we can decide error handling later	
					console.log('here in controllers: ',err);
					return;
				}
				res.json(dataReceived);
			//Username pass in from Helper.js. Data is stored in request query for GET request.
			}, req.query.username);
		},
		post: function (req, res) {
			//Data is stored in the request body for POST request.
			var dataPosted = req.body;
			console.log('inside controller', dataPosted);
			userModel.user.post(function (err, dataReceived) {
				if(err){
					//To Do: we can decide how to handle error later
				}
				// console.log(req.session)
				res.end();

			}, dataPosted);
		}
	}, 

	newsfeed: {
		get: function (req, res) {
			newsfeedModel.newsfeed.get(function (err, dataReceived) {
				if (err) {
					//To Do: we can decide how to handle erro later
				}
				res.json(dataReceived);
				//Username pass in from Helper.js. Data is stored in request query for GET request.
			}, req.query.username);
		}, 
		post: function (req, res) {
			var dataPosted = req.query;
			newsfeedModel.newsfeed.post(function (err, dataReceived) {
				if(err) {
					//To Do: we can decide how to handle error later
				}
				res.sendStatus(201);
			}, dataPosted)			
		}
	},

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
		}
	}
}; 



