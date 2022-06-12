import { readdir, stat as _stat } from 'fs';
import { join } from 'path';
const dirPath = join('.');

var readPath = function () {
	readdir(dirPath, function (error, path) {
		if (error) return error;
		path.forEach(function (file) {
			readFile(file);
		});
	});
};
var readFile = function (file) {
	var path = './' + file;
	_stat(path, function (error, stat) {
		if (error) return error;
		if (stat.isFile()) {
			console.log('%s %d bytes', file, stat.size);
		}
	});
};
readPath();