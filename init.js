var fs = require("fs-extra")
source = "./node_modules/microdirne/template"
var destination = "./"
fs.copy(source, destination, function(err) {
	if (err) {
		console.log("An error occured while copying the folder.")
		return console.error(err)
	}
	console.log("Copy completed!")
})
