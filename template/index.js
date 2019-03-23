var bootloader = require("./src/bootloader")
var context = bootloader.context
var injectbul = bootloader.injectbul

context.get("/", function(req, res) {
	res.send(injectbul.get("defaultController").index())
})