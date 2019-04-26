/* eslint-disable no-undef */
const { loadContext } = require('@yodata/transform')

test('example', () => {
	const context = loadContext('../src/example-cdef.yaml')
	const input = require('../__testdata__/input')
	// @ts-ignore
	const result = context.map(input)
	const output = require('../__testdata__/output')
	expect(result).toEqual(output)
})