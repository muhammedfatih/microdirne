class service {
	constructor() {
		this.dependencies = []
	}
	helloWorld() {
		return {
			Greeting: "Hello World!"
		}
	}
	specialFunc(a, b) {
		return a > 10 ? b : a + b
	}
}
module.exports = service
