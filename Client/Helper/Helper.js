var $ = require('jquery');

module.exports = {

	//sign up method try to create new user with 'post method', the obj contain informattion such as "user name, and password, "
	//we might need to check if the userName exsit, and we might also need to pre-check other information, such as password is valid here or somewhere else
	signup: function (obj) {
		// var data = {something: obj};
		$.ajax({
			method: 'POST',
			url: '/signup',
			dataType: 'json', 
			data: obj
		})
		.done(function (data) {
			console.log('signup success for: ' + data);
		});
	}, 

	//This method is used to compare username and password 
	signin: function (callback, username) {
		//data is wrap inside a object to be retrieved later in controllers.js
		var wrapper = {username: username};
		$.ajax({
			method: 'GET',
			url: '/signup',
			data: wrapper
		})
		.done(function (data) {
			console.log('signing in for: ' + username);
			// callback is needed on SignIn.jsx
			callback(data);
		})
	}, 

	//offerClass is a "post" to creating a class list with all informations, 
	offerClass: function (obj) {
		$.ajax({
			method: 'POST',
			url: '/offerClass', 
			data: obj
		})
		.done(function (course) {
			console.log('class successfully created: ' + course);
		})
	}, 

	//enroll is a "post" to update the information on the course database, then it will populate the particular course on both the "student" and "teacher" profile / newsfeed page
	enroll: function (obj) {
		$.ajax({
			method: 'POST', 
			url: '/enroll',
			data: obj
		})
		.done(function (enrolled) {
			console.log('class requested: ' + enrolled);
		})
	},


	//search is a "get" request to database, we compare information and to the search query, 
	search: function (searchObj) {
		$.ajax({
			method: 'GET',
			url: '/search',
			data: searchObj
		})
		.done(function (data) {
			//we may need to do something, such as filtering and comparing the search query with the data receive. 
		})
	},

		//search is a "get" request to database, we compare information and to the search query, 
	searchProfile: function (callback, username) {
		var searchObj = {username: username}
		$.ajax({
			method: 'GET',
			url: '/profile',
			data: searchObj
		})
		.done(function (data) {
			//we may need to do something, such as filtering and comparing the search query with the data receive. 
			callback(data);
		})
	},

	//Seach for all the message given a particular user. Set to just Hien right now.
	newsfeed: function (callback, username) {
		//data is wrap inside a object to be retrieved later in controllers.js
		var wrapper = {username: username};
		$.ajax({
			method: 'GET',
			url: '/newsfeed',
			data: wrapper
		})
		.done(function (data) {
			//Callback is setting State in NewsfeedEntryView
			callback(data);
		})
	}
}