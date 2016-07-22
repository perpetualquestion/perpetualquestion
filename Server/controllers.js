var userModel = require ('./db/userModel.js');
var newsfeedModel = require('./db/newsfeedModel.js');

module.exports = {
	users: {
		get: function (req, res) {
			console.log(req.body)
			userModel.user.post(function (err, dataReceived) {
				if(err){
					//To Do: we can decide error handling later	
				}
				res.json(dataReceived);
			});
		},
		post: function (req, res) {
			// we don't know the data yet, we need to refactor this
			console.log(req);
			var dataPosted = req.body;
			// console.log('inside controller:', req.route);
			userModel.user.post(function (err, dataReceived) {
				if(err){
					//To Do: we can decide how to handle error later
				}
				res.sendStatus(201);

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
				//Username pass in from Helper.js
			}, req.query.username);
		}, 
		post: function (req, res) {
			var dataPosted = req.body;
			newsfeedModel.newsfeed.post(function (err, dataReceived) {
				if(err) {
					//To Do: we can decide how to handle error later
				}
				res.sendStatus(201);
			}, dataPosted)			
		}
	}
}; 