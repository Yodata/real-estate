const { loadContext, mapAsync, plugin } = require('@yodata/transform')
const viewPlugin = require('@yodata/transform-plugin-view')

const context = loadContext('./fetch-json-value-example.cdef.yaml').use(viewPlugin).use(plugin.fetchJsonValue)

module.exports = {
  map: async data => mapAsync(context)(data)
}
