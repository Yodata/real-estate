
module.exports = (Handlebars, _) => {

  Handlebars.registerHelper('concat', (str1, str2, separator) => {
    return `${str1 || ''}${separator || ''}${str2 || ''}`;
  });

  Handlebars.registerHelper('tree', path => {
    const filteredPaths = path.split('.').filter(Boolean);
    if (!filteredPaths.length) return;
    const dottedPath = filteredPaths.join('.');

    return `${dottedPath}.`;
  });

  Handlebars.registerHelper('buildPath', (propName, path, key) => {
    if (!path) return propName;
    return `${path}.${propName}`;
  });

  Handlebars.registerHelper('isRequired', (obj, key) => {
    return obj && obj.required && !!(obj.required.includes(key));
  });

  Handlebars.registerHelper('acceptedValues', items => {
    if (!items) return '<em>Any</em>';

    return items.map(i => `${i}`).join(', ');
  });

  Handlebars.registerHelper('equal', (lvalue, rvalue, options) => {
    if (arguments.length < 3)
      throw new Error('Handlebars Helper equal needs 2 parameters');
    if (lvalue !== rvalue) {
      return options.inverse(this);
    }

    return options.fn(this);
  });

  Handlebars.registerHelper('inc', (number) => {
    return number + 1;
  });

  Handlebars.registerHelper('log', (something) => {
    console.log(require('util').inspect(something, { depth: null }));
  });

  Handlebars.registerHelper('json', function (object) {
    return (typeof object === 'object') ? JSON.stringify(object, null, 2) : object
  });

  Handlebars.registerHelper('jsonparse', function (object) {
    return (typeof object === 'string') ? JSON.parse(object) : object
  });

  Handlebars.registerHelper('coalesce', (a, b) => {
    return a || b
  })

  Handlebars.registerHelper('lowercase', (value) => {
    if (typeof value === 'string') {
      return value.toLowerCase()
    }
    return value
  })

  Handlebars.registerHelper('snakeCase', (value) => {
    if (typeof value === 'string') {
      return _.snakeCase(value)
    }
    return value
  })

  Handlebars.registerHelper('kebabCase', (value) => {
    if (typeof value === 'string') {
      return _.kebabCase(value)
    }
    return value
  })

  Handlebars.registerHelper('stringify', function (value) {
    return JSON.stringify(value)
  });

  Handlebars.registerHelper('typespec', function (property) {
    if (typeof property === 'object') {
      const isArray = (property && property.type === 'array')
      const prop = isArray ? property.items : property
      let spec = typeSpec(prop)
      if (property && property.required) {
        spec += '!'
      }
      return isArray ? `[${spec}]` : spec
    }

    function typeSpec(prop) {
      if (typeof prop === 'undefined') return
      let result
      let { type, format, oneOf, anyOf } = prop
      let kind = prop[ 'x-kind' ]
      let range = oneOf || anyOf

      if (kind) {
        return `[${kind}](/schemas#${kind.toLowerCase()})`
      }

      if (type) {
        return format ? `${type}&lt;${format}&gt;` : type
      }

      if (Array.isArray(range)) {
        return range.map(typeSpec).join('&#124;')
      }

      return '*'
    }

  });

  Handlebars.registerHelper('rangespec', function (property) {
    if (typeof property === 'object' && property[ 'x-range' ]) {
      let range = property[ 'x-range' ]
      let spec
      switch (typeof range) {
        case 'string':
          spec = `[${range}](/schemas#${range.toLowerCase()})`
          break
        case 'object':
          spec = range.map(range => `[${range}](/schemas#${range.toLowerCase()})`).join(',')
      }
      return `<br/>RANGE: ${spec}`
    }
  });

  Handlebars.registerHelper('propDescription', function (propertyListItem) {
    if (typeof propertyListItem === 'object') {
      let { description, example } = propertyListItem
      let result = description || ''
      if (typeof example === 'string') {
        result += `<br/>i.e.  ${example} .`
      }
      return result
    }
  });


  Handlebars.registerHelper('listItem', function (value) {
    return (typeof value !== 'undefined') ? `- ${value + ' '}` : ''
  });

  Handlebars.registerHelper('enum', function (property) {
    if (property && Array.isArray(property[ 'enum' ])) {
      const items = property[ 'enum' ]
      const label = (items.length === 1) ? 'CONST' : 'ENUM'
      const value = items.join(', ')
      return `${label}: ${value}`
    }
  })

  Handlebars.registerHelper('link', function (name, url) {
    return `[${name}](${url})`
  })

  Handlebars.registerHelper('nohash', function (name) {
    return String(name).replace('#', '')
  })

  Handlebars.registerHelper('getActions', function () {
    const { schemas } = this.asyncapi.components
    const result = {}
    Object.keys(schemas)
      .filter(key => { return String(key).includes('Action') })
      .sort()
      .forEach(key => {
        result[ key ] = schemas[ key ]
      })
    return result
  })

  Handlebars.registerHelper('get-types', function () {
    const { schemas } = this.asyncapi.components
    const result = {}
    Object.keys(schemas)
      .filter(key => {
        return ! String(key).includes('Action')
      })
      .sort()
      .forEach(key => {
        result[ key ] = schemas[ key ]
      })
    return result
  })

  Handlebars.registerHelper('isAction', function (name) {
    return String(name).includes('Action')
  })

};
