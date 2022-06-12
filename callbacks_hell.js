import { readdir, stat as _stat } from 'fs';
import { join } from 'path';
const dirPath = join('.');

readdir(dirPath, function (error, contents) {
	if (error) { throw error; }
	contents.forEach(function (content) {
		var path = './' + content;
		_stat(path, function (error, stat) {
			if (error) { throw error; }
			if (stat.isFile()) {
				console.log('%s %d bytes', content, stat.size);
			}
		});
	});
});
