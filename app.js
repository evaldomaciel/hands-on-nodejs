var express = require('express'),
	load = require('express-load'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'), 
	expressSession = require('express-session'),
	app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(cookieParser('helloTalk'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
load('models')
	.then('controllers')
	.then('routes')
	.into(app);
app.listen(3000, function () {
	console.log("Hello Talk is ready!");
	console.log(__dirname);
});