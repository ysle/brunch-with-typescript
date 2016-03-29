
class App {

	constructor() {
		console.log('TS App initialized.')
		this.hello()
	}

	private hello() {
		console.log(`Hello ${this.who} !`)
	}

	private who = 'World'
}

export = new App

