const sh = require('shelljs')
const path = require('path')

module.exports = async function installDependencies(props) {
	const dest = path.resolve(process.cwd(), props.sourceContext)
	sh.cd(dest)
	console.log('installing dependencies')

	sh.exec('npm install')
	return props
}