// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index');
};
exports.account = function(req, res){
	res.render('account');
};
exports.createrecipe = function(req, res){
	res.render('createrecipe');
};
exports.viewrecipe = function(req, res){
	res.render('viewrecipe');
};
exports.login = function(req, res){
	res.render('login');
};
exports.register = function(req, res){
	res.render('register');
};