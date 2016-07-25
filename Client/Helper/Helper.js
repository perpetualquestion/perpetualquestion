var $ = require('jquery');

module.exports = {

	//sign up method try to create new user with 'post method', the obj contain informattion such as "user name, and password, "
	//we might need to check if the userName exsit, and we might also need to pre-check other information, such as password is valid here or somewhere else
	signup: function (data) {
		// var data = {something: obj};
		// console.log('at helper', data);
		$.ajax({
			method: 'POST',
			url: '/signup',
			dataType: 'json', 
			data: data
		})
		.done(function (results) {
			console.log('signup success for: ' + results);
		});
	}, 

	//This method is used to compare username and password 
	signin: function (data, callback) {
		$.ajax({
			method: 'GET',
			url: '/signin',
			data: data
		})
		.done(function (results) {
			if (results === "ERROR") {
				alert('Can not find match of username and password, please try again');
			} else {
				console.log('signing in for: ', results[0].username, results[0].password);				
			}
		})
	}, 

	signout: function () {
		$.ajax({
			method: 'GET',
			url: '/signout'
		})
		.done(function (results) {
			console.log(results);
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
	search: function (searchString, callback) {
		$.ajax({
			method: 'GET',
			url: '/search',
			data: searchString
		})
		.done(function (data) {
			callback(data);
			//we may need to do something, such as filtering and comparing the search query with the data receive. 
		})
	},

		//search is a "get" request to database, we compare information and to the search query, 
	searchProfile: function (callback) {
		// var searchObj = {username: username}
		$.ajax({
			method: 'GET',
			url: '/profile'
		})
		.done(function (data) {
			//we may need to do something, such as filtering and comparing the search query with the data receive. 
			// console.log("response data is", data);
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