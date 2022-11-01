// runs on the server side
// import { NextApiRequest, NextApiResponse } from 'next'
import { JSONSchemaFaker } from 'json-schema-faker'
import assert from 'node:assert'
// import { isString } from 'node:util/types'

const DEBUG =
  process.env.NEXT_PUBLIC_DEBUG === true ||
  process.env.NODE_ENV !== 'production'
/**
 * generates a json-schema-faker from the query parameters
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(req, res) {
  const schemaUrl = `http://${req.headers.host}/schema/${req.query.type}.json`
  const queryParams = req.query

  return fetchJsonSchemaFromTypeString(schemaUrl)
    .then((schema) => generateExampleFromSchema(schema, queryParams))
    .then((example) => {
      res.status(200).json(example)
      return
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ error: err.message })
      return
    })
}

async function fetchJsonSchemaFromTypeString(schemaUrl) {
  assert(typeof schemaUrl === 'string', 'schemaUrl must be a string')
  console.log('schemaUrl', schemaUrl)
  return fetch(schemaUrl)
    .then((response) => response.json())
    .catch((err) => {
      console.error(err)
      throw new Error(`failed to fetch schema for ${schemaUrl}:${err.message}`)
    })
}

async function generateExampleFromSchema(schema = {}, queryParams = {}) {
  const defaultOptions = {
    // if true, random properties will be generated (not good)
    randomOptionals: true,
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
    // Setup a custom randonmess generator, useful for getting deterministic results
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
  const result = JSONSchemaFaker.generate(schema)
  if (queryParams.debug==='true') {
    Object.assign(result, { commandOptions, queryParams })
  }
  return result
}
