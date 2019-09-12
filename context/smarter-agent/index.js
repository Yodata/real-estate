const { loadContext } = require('@yodata/transform')
const viewPlugin = require('@yodata/transform-plugin-view')
const ctx = loadContext('./property-basic-view.cdef.yaml').use(viewPlugin)

module.exports = ctx
