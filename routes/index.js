var data = require("../data.json");
exports.view = function(req, res){
	res.render('index', {
	'recipes': data.recipes,
	'name': req.params.user
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
