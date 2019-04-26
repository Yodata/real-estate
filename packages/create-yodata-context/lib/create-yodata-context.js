#!/usr/bin/env node
const inquirer = require('inquirer')
const copyFiles = require('./generate-project')
const kebabCase = require('lodash/kebabCase')
const logger = require('./logger')
const showHelp = require('./show-help')

const { YODATA_POD_URL, YODATA_POD_SECRET } = process.env

inquirer
	.prompt([
		{
			name: 'sourceContext',
			message: 'context name:',
			default: 'my-context',
			filter: kebabCase
		},
		{
			name: 'validationSchema',
			default: 'https://realestate.yodata.me/context/v1/schema.yaml'
		},
		{
			name: 'podURL',
			message: '',
			default: function () {
				return YODATA_POD_URL || 'https://user.yodata.me'
			}
		},
		{
			name: 'podSecret',
			message: 'pod secret or api-key',
			default: function () {
				return YODATA_POD_SECRET || 'secret'
			}
		}
	])
	.then(copyFiles({ source: './defaultTemplate' }))
	.then(showHelp)
	.catch(logger.error)