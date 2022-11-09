// @ts-check

import values from 'lodash/values'
import json from 'json5'
import getSchemaObject from './getSchemaObject'
import isArray from 'lodash/isArray'

function first (val) {
  if (typeof val === 'string') {
    return val
  }
  return values(val)[0]
}

function hasExample (subject) {
  return subject.exampleValue && values(subject.exampleValue).length > 0
}

export function createMockValue (subject) {
  if (subject) {
    if (hasExample(subject)) {
      const example = first(subject.exampleValue)
      const text = example.text || ''
      try {
        const response = text.startsWith('{') ? json.parse(example.text) : example.text
        return response
      } catch (e) {
        console.error(`failed to json parse ${subject.id}`)
        return text
      }
    }
    switch (subject.type) {
      case 'Type': {
        return createMockType(subject.id)
      }
      case 'Property': {
        const propertyType = first(subject.rangeIncludes)
        const propertySubject = getSchemaObject(propertyType)
        return createMockValue(propertySubject)
      }
      case 'Boolean':
        return true
      case 'Date':
        return new Date().toDateString()
      case 'DateTime':
        return new Date().toISOString()
      case 'Number':
        return 1.0
      case 'Text':
        return subject.id
      case 'URL':
        return `https://example.com/${subject.id}`
      default:
        // enumerations
        return subject.id
    }
  }
  throw new Error('subject required')
}

export function createMockType (type, properties = []) {
  const value = { type }
  if (isArray(properties) && properties.length > 0) {
    properties.forEach(prop => {
      value[prop.id] = createMockValue(prop)
    })
  }
  return value
}

export function getExampleValue (subject) {
  if (subject) {
    if (hasExample(subject)) {
      return first(subject.exampleValue)
    }
    const mockJson = createMockValue(subject)
    const mockText = json.stringify(mockJson)
    return {
      exampleOfWork: subject.id,
      json: mockJson,
      text: mockText
    }
  }
  console.error('getExampleValue called with null/undefined subject')
}

export default getExampleValue
