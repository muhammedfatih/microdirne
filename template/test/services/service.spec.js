var assert = require("assert")
var iService = require("../../src/services/iService.js")
var service = require("../../src/services/service.js")

describe("service", function() {
	describe("specialFunc", function() {
		it("should return b if a is greater than 10", function() {
			var a = 12
			var b = 3
			var expected = 3
			var interface = new iService()
			var instance = new service()
			interface.instance(instance)
			var result = interface.specialFunc(a, b)
			assert.equal(expected, result)
		})
		it("should return sum if a is less than or equal to 10", function() {
			var a = 9
			var b = 3
			var expected = 12
			var interface = new iService()
			var instance = new service()
			interface.instance(instance)
			var result = instance.specialFunc(a, b)
			assert.equal(expected, result)
		})
	})
})
