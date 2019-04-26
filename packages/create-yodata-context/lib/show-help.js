const logger = require('./logger')
const cowsay = require('cowsay')

module.exports = () => {

	logger.log(cowsay.say({
		text: 'YOU DID IT!'
	}))
}