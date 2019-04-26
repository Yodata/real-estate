const copy = require('recursive-copy')
const path = require('path')
const through = require('through2')
const Handlebars = require('handlebars')

module.exports = ({ source }) => async (props) => {
	const src = path.resolve(__dirname, source)
	const dest = path.resolve(process.cwd(), props.projectName)
	return copy(src, dest, {
		rename: (filePath) => {
			const template = Handlebars.compile(filePath)
			const result = template(props)
			return result
		},
		transform: (src) => {
			path.extname(src)
			return through(function (chunk, enc, done) {
				const template = Handlebars.compile(chunk.toString())
				done(null, template(props))
			})
		}
	})
}







