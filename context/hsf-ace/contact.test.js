const { loadContext } = require('@yodata/transform')
const contact = loadContext('./ace-cdef-test.yaml')
const input = require('./contact-input')

test('contact.transform', () => {
	const result = contact.map(input)
	expect(result).toHaveProperty('type', 'Contact_Type__c')
})