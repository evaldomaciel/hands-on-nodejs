import { createServer } from 'http';
import { parse } from 'url';
var server = createServer(function (request, response) {
	response.writeHead(200, { "Content-Type": "text/html" });
	response.write("<head><meta charset=\"utf-8\"></head><h1>Definição de query string</h1>");
	var result = parse(request.url, true);
	for (var key in result.query) {
		response.write("<br>" + key + ": " + result.query[key] + "</br>");
		console.log(key + ": " + result.query[key]);
	}
	response.end();
});
server.listen(3000, function () {
	console.log('Servidor de pé!');
});