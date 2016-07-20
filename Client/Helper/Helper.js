var $ = require('jQuery');

module.exports = {

	//sign up method try to create new user with 'post method', the obj contain informattion such as "user name, and password, "
	//we might need to check if the userName exsit, and we might also need to pre-check other information, such as password is valid here or somewhere else
	signup: function (obj) {
		$.ajax({
			method: 'POST',
			url: '/signup', 
			data: obj
		})
		.done(function (data) {
			console.log('signup success for: ' + data);
		});
	}, 

	//sign in can be a "get" or "post" request, we compare the "username" and "password" user provide to the information on database, to determine 
	// if user name and password match 
	signin: function (obj) {
		$.ajax({
			method: 'POST',
			url: '/signin',
			data: obj
		})
		.done(function (username) {
			console.log('signing in for: ' + username);
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
	}
}