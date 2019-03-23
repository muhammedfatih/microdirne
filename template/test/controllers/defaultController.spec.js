var assert = require("assert")
var controller = require("../../src/controllers/defaultController.js")
var iservice = require("../../src/services/iservice.js")

describe("defaultController", function() {
	describe("index", function() {
		it("should return greeting of the service", function() {
			var interface = new iservice()
			var defaultController = new controller()
			var expected = {
				Greeting: "Test!"
			}
			var response = {
				Greeting: "Test!"
			}

			interface.helloWorld = function() {
				return response
			}

			defaultController.iService = interface
			var result = defaultController.index()
			assert.equal(JSON.stringify(expected), JSON.stringify(result))
		})
	})
})
