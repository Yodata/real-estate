require('dotenv').config()
const { loadContext } = require('@yodata/context-sdk')

test('hsf-ignite', () => {
	const context = loadContext('../hsf-ignite.cdef.yaml')
	const input = require('../example/input.json')
	const output = require('../example/output.json')
	const result = context.map(input)
	expect(result).toEqual(output)
})
