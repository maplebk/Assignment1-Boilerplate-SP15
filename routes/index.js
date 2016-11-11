var data = require("../data.json");
var globaluser = "";
exports.view = function(req, res){
	if (req.params.user !== undefined)
	{
		globaluser = req.params.user;
	}
	res.render('index', {
	'recipes': data.recipes,
	'name': globaluser
  });
};
exports.account = function(req, res){
	res.render('account');
};
exports.createrecipe = function(req, res){
	res.render('createrecipe');
};
exports.viewrecipe = function(req, res){
	res.render('viewrecipe', {
	'recipe': data.recipes[parseInt(req.params.recipe)]
  });
};
exports.login = function(req, res){
	var attempt = (req.params.error === "attempt");
	res.render('login', {
		'error': (req.params.error === "attempt" ? "" : "error")
	});
};
exports.register = function(req, res){
	res.render('register');
};
exports.forgot = function(req, res){
	res.render('forgot');
};
exports.verify = function(req, res){
	var name = "";
	for (x in data.accounts) {
		var account = data.accounts[x];
    if (account.username === req.params.user && account.password === req.params.pass)
		{
			name = account.username;
		}
	}
	if (name === "")
	{
		res.redirect('/login/error');
	}
	else {
		res.redirect("/index/" + name);
	}
};

exports.logout = function(req, res){
	globaluser = "";
	res.redirect('/');
};
