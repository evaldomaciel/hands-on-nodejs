import { createServer } from 'http';
var responseRequest = function (request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Hello World!");
  response.end();
}
var server = createServer(responseRequest);
var serverOnline = function () {
  console.log('O servidor esta de pé!');
}
server.listen(3000, serverOnline);

/*
var server = createServer(function (request, response) {
	response.writeHead(200, { "Content-type": "text/html" });
	response.write("Hello world");
	response.end();
});

server.listen(3000, () => console.log("O servidor esta de pé!"));

*/
