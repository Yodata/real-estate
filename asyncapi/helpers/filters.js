
exports.registerHelpers = function (nunjucksEnvironment) {
  const registerHelper = (name, helper) => {
    Object.assign(nunjucksEnvironment.filters, { [ name ]: helper })
  }

  registerHelper('concat', (str1, str2, separator) => {
    return `${str1 || ''}${separator || ''}${str2 || ''}`;
  });

  registerHelper('tree', function(path) {
    const filteredPaths = String(path).split('.').filter(Boolean);
    if (!filteredPaths.length) return;
    const dottedPath = filteredPaths.join('.');

    return `${dottedPath}.`;
  });

  registerHelper('buildPath', (propName, path) => {
    if (!path) return propName;
    return `${path}.${propName}`;
  });

  registerHelper('isRequired', function(obj, key) {
    return obj && Array.isArray(obj.required) && !!(obj.required.includes(key));
  });

  registerHelper('acceptedValues', items => {
    if (!items) return '<em>Any</em>';

    return items.map(i => `${i}`).join(', ');
  });

  registerHelper('equal', (lvalue, rvalue, options) => {
    // @ts-ignore
    if (arguments.length < 3)
      throw new Error('Handlebars Helper equal needs 2 parameters');
    if (lvalue !== rvalue) {
      return options.inverse(this);
    }

    return options.fn(this);
  });

  registerHelper('inc', (number) => {
    return number + 1;
  });

  registerHelper('log', (something) => {
    console.log(require('util').inspect(something, { depth: null }));
  });

  registerHelper('json', function (object) {
    return (typeof object === 'object') ? JSON.stringify(object, null, 2) : object
  });

  registerHelper('jsonparse', function (object) {
    return (typeof object === 'string') ? JSON.parse(object) : object
  });

  registerHelper('lowercase', (value) => {
    if (typeof value === 'string') {
      return value.toLowerCase()
    }
    return value
  })

  registerHelper('snakeCase', (value) => {
    if (typeof value === 'string') {
      return _.snakeCase(value)
    }
    return value
  })

  registerHelper('kebabCase', (value) => {
    if (typeof value === 'string') {
      return _.kebabCase(value)
    }
    return value
  })

  registerHelper('stringify', function (value) {
    return JSON.stringify(value)
  });

  registerHelper('typespec', function (property) {
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
        return `[${kind}](/types/${kind})`
      }

      if (type) {
        return format ? `${type}&lt;${format}&gt; ` : type
      }

      if (Array.isArray(range)) {
        return range.map(typeSpec).join('&#124;')
      }

      return '*'
    }

  });

  registerHelper('rangespec', function (property) {
    if (typeof property === 'object' && property[ 'x-range' ]) {
      let range = property[ 'x-range' ]
      let spec
      switch (typeof range) {
        case 'string':
          spec = `[${range}](/types/${range})`
          break
        case 'object':
          spec = range.map(range => `[${range}](/types/${range})`).join(', ')
      }
      return `<br/>RANGE: ${spec}`
    }
  });

  registerHelper('propDescription', function (propertyListItem) {
    if (typeof propertyListItem === 'object') {
      let { description, example } = propertyListItem
      let result = description || ''
      if (typeof example === 'string') {
        result += `<br/>i.e.  ${example} .`
      }
      return result
    }
  });


  registerHelper('listItem', function (value) {
    return (typeof value !== 'undefined') ? `- ${value + ' '}` : ''
  });

  registerHelper('enum', function (property) {
    if (property && Array.isArray(property[ 'enum' ])) {
      const items = property[ 'enum' ]
      const label = (items.length === 1) ? 'CONST' : 'ENUM'
      const value = items.join(', ')
      return `${label}: ${value}`
    }
  })

  registerHelper('link', function (name, url) {
    return `[${name}](${url})`
  })

  registerHelper('nohash', function (name) {
    return String(name).replace('#', '')
  })

  registerHelper('getActions', function () {
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

  registerHelper('get-types', function () {
    const { schemas } = this.asyncapi.components
    const result = {}
    Object.keys(schemas)
      .filter(key => {
        return !String(key).includes('Action')
      })
      .sort()
      .forEach(key => {
        result[ key ] = schemas[ key ]
      })
    return result
  })

  registerHelper('isAction', function (name) {
    return String(name).includes('Action')
  })

  registerHelper('objectEntries', function (object) {
    return Object.entries(object)
  })


  return nunjucksEnvironment

}
