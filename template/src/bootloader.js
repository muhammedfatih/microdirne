var fs = require("fs")
var express = require("express")
var injectbul = require("injectbul")

var config = JSON.parse(fs.readFileSync("./src/config.json", "utf8"))
injectbul = new injectbul.injectbul(config["Injections"])

var router = express.Router
var context = new router()
var app = express()
	.use(require("body-parser").json())
	.use(context)
	.listen(config["Port"])

var defaultController = require("./controllers/defaultController")
injectbul.inject(defaultController)

exports.context = context
exports.injectbul = injectbul
