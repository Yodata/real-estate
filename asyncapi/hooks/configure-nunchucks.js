const { registerHelpers } = require('../helpers/filters')

module.exports = {
  "generate:before": configureNunchucks
}

function configureNunchucks(generator) {
  if (generator?.nunjucks?.filters) {
    registerHelpers(generator.nunjucks)
    console.debug('nunjucks filters enabled')
  }
}
