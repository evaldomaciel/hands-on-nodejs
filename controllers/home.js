module.exports = function (app) {
	var HomeController = {
		index: function (req, res) {
			if (req.session.user != undefined) {
				user = req.session.user;
				res.render('home/index', user);
			} else {
				user = undefined;
				res.render('home/index', user);
			}
		},
		login: (req, res) => {
			var user = req.body.user;
			user['contatos'] = [];
			req.session.user = user;
			console.log(req.session.user);
			res.redirect('/');
		},
		logout: (req, res) => {
			req.session.destroy();
			res.redirect('/');
		}
	};
	return HomeController;
};