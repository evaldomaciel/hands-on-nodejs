import { createServer } from 'http';
import { readFile } from 'fs';
import { join } from 'path';

const dirPath = join('.');

var server = createServer(function (request, response) {
	readFile(dirPath + '/file_system.html', function (erro, html) {
		response.writeHeader(200, { 'Content-Type': 'text/html' });
		response.write(html);
		response.end();
	});
});

server.listen(3000, function () {
	console.log('Executando Site Pessoal');
});