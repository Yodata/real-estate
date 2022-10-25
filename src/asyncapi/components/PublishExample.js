import { Text } from '@asyncapi/generator-react-sdk'
import { generateExample, getPayloadExamples } from '@asyncapi/generator-filters'
import { CodeBlock } from './common'

const defaultOptions = {
  skipNonRequired: false,
  skipReadOnly: true // don't show auto-generated message headers
}

/**
 * Generate string with example from provided schema
 * @param {object} schema - Schema object as JSON and not Schema model map
 * @param {object} [options] - Options
 * @param {boolean} [options.skipNonRequired] - Don't include non-required object properties not specified in required property of the schema object
 * @param {boolean} [options.skipReadOnly] -  Don't include readOnly object properties
 * @param {boolean} [options.skipWriteOnly] - Don't include writeOnly object properties
 * @param {boolean} [options.quiet] = Don't log console warning messages
 * @returns {string}
 */
export function generate (schema, options) {
  const getOptions = (overrides) => Object.assign({}, defaultOptions, overrides)
  const _options = getOptions(options)
  return generateExample(schema, _options)
}

export default function PublishExample (props) {
  const { schema, options } = props
  const content = generateExample(schema, options)
  return (
    <Text>
      ### Publish {topic} example
      <CodeBlock language='http'>
        POST /publish/ HTTP/1.1
        Host: # your host pod
        x-api-key: # your secret key
        Content-Type: application/json

        {content}
      </CodeBlock>
    </Text>
  )
}
