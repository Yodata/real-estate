#!/usr/bin/env node
const inquirer = require('inquirer')
const generateProject = require('./generate-project')
const kebabCase = require('lodash/kebabCase')
const logger = require('./logger')
const showHelp = require('./show-help')

const { YODATA_POD_URL, YODATA_POD_SECRET } = process.env

inquirer
	.prompt([
		{
			name: 'sourceContext',
			message: 'project name',
			default: 'my-context',
			filter: kebabCase
		},
		{
			name: 'sourceDescription',
			message: 'project description'
		},
		{
			name: 'validationSchema',
			default: 'https://realestate.yodata.me/context/v1/schema.yaml'
		},
		{
			name: 'podURL',
			message: 'service pod URL',
			default: function () {
				return YODATA_POD_URL || 'https://supercrm.yodata.me'
			}
		},
		{
			name: 'podSecret',
			message: 'pod secret (x-api-key)',
			default: function () {
				return YODATA_POD_SECRET || 'secret'
			}
		}
	])
	.then(generateProject({ source: './defaultTemplate' }))
	.then(showHelp)
	.catch(logger.error)