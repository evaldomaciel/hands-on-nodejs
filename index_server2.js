import { createServer } from 'http';
var server = createServer(function (request, response) {
	response.writeHead(200, { "Content-Type": "text/html" });
	if (request.url == "/") {
		response.write("<h1>Home page</h1>");
	} else if (request.url == "/welcome") {
		response.write("<h1>Bem-vindo as rotas do Node :-)</h1>");
	} else {
		response.write("<head><meta charset=\"utf-8\"></head><h1>Página não encontrada :-(</h1>");
	}
	response.end();
});
server.listen(3000, function () {
	console.log('Servidor de pé!');
});