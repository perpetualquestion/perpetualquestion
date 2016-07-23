var userModel = require ('./db/userModel.js');
var newsfeedModel = require('./db/newsfeedModel.js');

module.exports = {
	users: {
		get: function (req, res) {
			userModel.user.get(function (err, dataReceived) {
				if(err){
					//To Do: we can decide error handling later	
				}
				res.json(dataReceived);
			//Username pass in from Helper.js. Data is stored in request query for GET request.
			}, req.query.username);
		},
		post: function (req, res) {
			//Data is stored in the request body for POST request.
			var dataPosted = req.body;
			userModel.user.post(function (err, dataReceived) {
				if(err){
					//To Do: we can decide how to handle error later
				}
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
	}

	search: {
		get: function (req, res) {
			searchModel.search.get(function (err, dataReceived) {
				if (err) {
					//To Do: we can decide how to handle erro later
				}
				res.json(dataReceived);
				//Username pass in from Helper.js
			}, req.query.username);
		}
	}
}; 