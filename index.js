var fs = require("fs");

const fileName = "./tekst.txt";

fs.readdir(".", "utf-8", function(err, files) {
  errHandler(err);
  writeToFile(files);
});
 
function writeToFile(files) {
	files.forEach(function (entry) {
		fs.appendFile(fileName, entry + "\r\n", function (err) {
			errHandler(err);
		});
	});
}

function errHandler(err) {
  if (err) throw err;
}