// runs on the server side
// import { NextApiRequest, NextApiResponse } from 'next'
import { request } from 'http2-wrapper'
import { JSONSchemaFaker } from 'json-schema-faker'
import assert from 'node:assert'
// import { isString } from 'node:util/types'

const DEBUG =
  process.env.NEXT_PUBLIC_DEBUG === true ||
  process.env.NODE_ENV !== 'production'
/**
 * generates a json-schema-faker from the query parameters
 * @param {NextApiRequest} request
 * @param {NextApiResponse} response
 */
export default async function handler(request, response) {

  let type = request.query.type
  if (Array.isArray(type)) {
    if (type[ 0 ] === 'realestate') {
      type = type.slice(1)
    }
    type = type.join('.')
  }

  const schemaUrl = `http://${request.headers.host}/schema/${type}.json`
  const queryParams = request.query

  return fetchJsonSchemaFromTypeString(schemaUrl)
    .then((schema) => {
      return generateExampleFromSchema(schema, queryParams)
    })
    .then((example) => {
      response.status(200).json(example)
    })
    .catch((err) => {
      console.error(err)
      response.status(500).json({ error: err.message })
    })
}

/**
 *
 * @param {string} schemaUrl
 * @returns
 */
async function fetchJsonSchemaFromTypeString(schemaUrl) {
  assert(typeof schemaUrl === 'string', 'schemaUrl must be a string')
  return fetch(schemaUrl)
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.error(err)
      throw new Error(`failed to fetch schema for ${schemaUrl}:${err.message}`)
    })
}

async function generateExampleFromSchema(schema = {}, queryParams = {}) {
  console.log('generateExampleFromSchema', { schema, queryParams })
  // defaultOptions = show all optional properties (good for development)
  const defaultOptions = {
    // if true, random properties will be generated (not good)
    randomOptionals: false,
    // if true will choose a value from schema examples (or one of example is provided)
    // if false, values will be random strings unless we
    useExamplesValue: true,
    // 1 = all optional properties will be included
    // 0 = no optional properties will be included
    // 0.5 = 50% of optional properties will be included
    // null = optional properties will be included at random
    optionalsProbability: 1,
    // if fixedProbabilities is true,
    // the optionalsProbability determine the properties to be included
    // in other words, the result will be consistent
    fixedProbabilities: true,
    // if true, the properties will be sorted by key
    sortProperties: true,
    // Setup a custom randomness generator, useful for getting deterministic results
    // (default: Math.random)
    // random: 0,
    // Remove any generated null value from the resulting value
    // (default: false)
    omitNulls: true,
    // only include required properties
    // (default: false)
    requiredOnly: false,
  }
  const commandOptions = {}
  // set json-schema-faker options
  // limit options allowed to be specified by the request query string
  Object.entries(defaultOptions).forEach(([ optionName, defaultValue ]) => {
    let optionValue = defaultValue
    if (queryParams[ optionName ] !== undefined) {
      const userValue = queryParams[ optionName ]
      switch (typeof defaultValue) {
        case 'boolean':
          optionValue = (userValue === 'true')
          break
        case 'number':
          optionValue = Number(userValue)
          break
      }
    }
    commandOptions[optionName] = optionValue
    JSONSchemaFaker.option(optionName, optionValue)
  })
  if (typeof schema.headers === 'object' || typeof schema.payload === 'object') {
    schema = transformMessageSchema(schema)
  }
  return JSONSchemaFaker.resolve(schema)
}



function transformMessageSchema(schema) {
  const properties = {}
  if (typeof schema.headers === 'object') {
    Object.assign(properties, schema.headers.properties)
  }
  if (typeof schema.payload === 'object') {
    Object.assign(properties, { data: schema.payload.properties })
  }
  return {
    type: 'object',
    properties
  }
}
