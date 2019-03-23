class defaultController {
	constructor() {
		this.dependencies = ["iService"]
	}
	index() {
		return this.iService.helloWorld()
	}
}
module.exports = defaultController
