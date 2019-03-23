var injectbul = require("injectbul")
class iService extends injectbul.iinterface {
	helloWorld() {
		return this.instance.helloWorld()
	}
	specialFunc(a, b) {
		return this.instance.specialFunc(a, b)
	}
}
module.exports = iService
