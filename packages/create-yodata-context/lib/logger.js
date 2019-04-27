/* eslint-disable no-console */
const chalk = require('chalk').default

const Logger = {
	log(...msg) {
		return console.log(...msg)
	},
	info(...msg) {
		return console.log(chalk.green('[Info]'), ...msg)
	},
	error(...msg) {
		return console.error(chalk.bold.red('[Error]'), ...msg)
	},
	warn(...msg) {
		return console.warn(chalk.keyword('orange')('[Warn]'), ...msg)
	},
	debug(...msg) {
		return console.warn(chalk.blue('[Debug]'), ...msg)
	},
}

module.exports = Logger
