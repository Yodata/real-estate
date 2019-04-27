const logger = require('./logger')
const chalk = require('chalk').default
const EXAMPLE_MESSAGE = JSON.stringify({
	recipient: 'https://user.example.com/profile/card#me',
	topic: 'realestate/test#event',
	data: {
		type: 'TestEvent'
	}
}, null, 2)

module.exports = ({ sourceContext, podURL }) => {
	logger.log(chalk`
  
  {whiteBright.bold Nicely done!}
  
  {blue - edit your context:}
    {greenBright open ${sourceContext}/${sourceContext}.yaml}

  {blue - update example input and ouput:}
    {greenBright open ${sourceContext}/__testdata__/input.js}

  {blue - test your work}
    {greenBright cd ${sourceContext} && npx jest}

  {blue - deploy your context}
    {greenBright cd ${sourceContext} && npx deploy}

  {blue - use your context}
    {blue POST} {greenBright /publish} {blue HTTP/1.1}
    {blue Host:} {greenBright ${podURL}}
    {blue Content-Type:} {greenBright application/json;utf8}

  {greenBright ${EXAMPLE_MESSAGE}}
    
`)
}
