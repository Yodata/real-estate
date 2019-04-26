#!/usr/bin/env node
const inquirer = require('inquirer')
const copyFiles = require('./copy-files')
const kebabCase = require('lodash/kebabCase')
const logger = require('./logger')
const showHelp = require('./show-help')

const { POD_URL, POD_SECRET } = process.env

inquirer
	.prompt([
		{
			name: 'projectSchema',
			default: 'https://realestate.yodata.me/ns/v1/schema.yaml'
		},
		{
			name: 'projectName',
			message: 'context name:',
			default: 'my-context',
			filter: kebabCase
		},
		{
			name: 'podURL',
			message: 'URL of the pod to host your context',
			default: POD_URL
		},
		{
			name: 'podSecret',
			message: 'pod secret or api-key',
			default: POD_SECRET
		}
	])
	.then(copyFiles({ source: './defaultTemplate' }))
	.then(showHelp)
	.catch(logger.error)