/* eslint-disable no-console */

const { json } = require('micro')

module.exports = (req, res) => {
	const data = json(req)
	console.log(data)
	return data
}