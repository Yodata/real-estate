require('dotenv').config()
const { loadContext } = require('@yodata/transform')

test('{{sourceContext}}', () => {
	const context = loadContext('../{{sourceContext}}.yaml')
	const input = require('../__testdata__/input.js')
	const output = require('../__testdata__/output.js')
	const result = context.map(input)
	expect(result).toEqual(output)
})