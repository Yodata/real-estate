import { File, Text } from '@asyncapi/generator-react-sdk';
import { FrontMatter } from '../../components/FrontMatter';
import { Schema } from '../../components/Schema';

// eslint-disable-next-line react/display-name
export default function ({ asyncapi }) {
  const schemas = asyncapi.allSchemas()
  const schemaPages = []
  Object.entries(schemas).forEach(([ schemaName, schema ]) => {
    const fileName = schemaName + '.md'
    schemaPages.push(
      <File name={fileName}>
        <FrontMatter params={{ title: schemaName }} />
        <Schema schema={schema} schemaName={schemaName} hideTitle={false} />
      </File>
    )
  })
  return schemaPages
}

function $Schema(props) {
  const { asyncapi, schema, schemaName, hideTitle } = props

  return (
    <File name={fileName}>
      <FrontMatter asyncapi={asyncapi} params={{ title: fileName }} />
      <Schema asyncapi={asyncapi} schema={schema} schemaName={schemaName} hideTitle={false} />
    </File>
  )
}

function TableRows(schema) {
  return Object.entries(schema.properties).map(([ name, property ]) => {
    const type = property.type()
    const description = property.hasDescription() ? property.description() : ''
    return `| ${name} | ${property.type()} | ${description} |`
  }).join('\n')
}

function Title(props) {
  const { schemaName, hideTitle } = props
  return hideTitle ? null : `# ${schemaName}\n\n`
}

function SchemaPropRow(props) {
  const { prop, propName } = props
  const type = typespec(prop.json())
  const description = prop.hasDescription() ? prop.description() : ''
  return `| ${propName} | ${type} | ${description} |`
}

function typespec(property) {
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

}

function TableHeaders() {
  headers = [
    '| Name | Type | Description |',
    '|:-----| :--- | :---------- |\n'
  ]
  return headers.join('\n')
}