module.exports = function (app) {
	var auth = require ('../middlewares/authenticator.js');
	var contacts = app.controllers.contacts;
	app.get('/contacts', auth, contacts.index);
	app.get('/contact/:id', auth, contacts.show);
	app.post('/contacts', auth, contacts.create);
	app.get('/contact/:id/editar', auth, contacts.edit);
	app.put('/contact/:id', auth, contacts.update);
	app.delete('/contact/:id', auth, contacts.destroy);
};