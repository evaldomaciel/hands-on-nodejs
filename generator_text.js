import { writeFile, writeFileSync } from 'fs';

const asyncFunc = function () {
	let startTime = new Date().getMilliseconds();
	for (var i = 1; i <= 5; i++) {
		if (i == 1) {
			console.log("Criando arquivos de forma assíncrona");
		}
		let file = "async-txt" + i + ".txt";
		writeFile(file, "Hello Node.js!", function (err, out) {
			console.log(file + " - " + parseInt(parseInt(new Date().getMilliseconds()) - startTime));
		});
	}
}

const syncFunc = function () {
	let startTime = new Date().getMilliseconds();
	for (var i = 1; i <= 5; i++) {
		if (i == 1) {
			console.log("Criando arquivos de forma síncrona");
		}

		let file = "sync-txt" + i + ".txt";
		let out = writeFileSync(file, "Hello Node.js!");
		console.log(file + " - " + parseInt(parseInt(new Date().getMilliseconds()) - startTime));
	}
}

syncFunc();
asyncFunc();