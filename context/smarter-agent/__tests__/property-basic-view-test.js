/* eslint-disable no-undef */
require('dotenv').config()
const viewPlugin = require('@yodata/transform-plugin-view')

test('property-basic-view', () => {
	const input = require('../example/PROPERTY_BASIC_VIEW.in.json')
	const ctx = require('..')	
	const result = ctx.map(input)
	// expect(result).toHaveProperty('topic', 'realestate/website#propertyview')
	expect(result).toHaveProperty('agent')
	expect(result).toHaveProperty('agent.givenName', 'agent.givenName')
	expect(result).toHaveProperty('agent.familyName', 'agent.familyName')
	expect(result).toHaveProperty('agent.telephone', 'agent.telephone')
	// expect(result).toHaveProperty('agent.identifier.igniteUserId', 'agent.identifier.0.userId')

	expect(result).toHaveProperty('recipient.type', 'RealEstateAgent')
	expect(result).toHaveProperty('recipient.id', 'https://00000.bhhs.hsfaffiliates.com/profile/card#me')

	expect(result).toHaveProperty('keyPath', value)
})
