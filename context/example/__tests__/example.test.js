require('dotenv').config()
const { loadContext } = require('@yodata/transform')

test('example', () => {
	const context = loadContext('../example.yaml')
	const input = require('../__testdata__/input.js')
	const output = require('../__testdata__/output.js')
	const result = context.map(input)
	expect(result).toEqual(output)
})