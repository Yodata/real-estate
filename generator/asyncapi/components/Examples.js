import { Text, CodeBlock, BlockQuote } from '@asyncapi/generator-react-sdk';
import { generateExample } from '@asyncapi/generator-filters'

// options (optional) - object Available options:
// skipNonRequired - boolean Don't include non-required object properties not specified in required property of the schema object
// skipReadOnly - boolean Don't include readOnly object properties
// skipWriteOnly - boolean Don't include writeOnly object properties
// quiet - boolean Don't log console warning messages

export function Example({ schema = {}, schemaName = '' }) {
  const defaultOptions = {
    skipNonRequired: false,
    skipReadOnly: false,
    skipWriteOnly: true,
    quiet: true,
  }
  const example = generateExample(schema.json(), defaultOptions)
  return (
    <>
      <BlockQuote>Examples of {schemaName}</BlockQuote>
      <Text newLines={2}>
        <CodeBlock language='json'>{example}</CodeBlock>
      </Text>
    </>
  )
}

export function Examples ({ examples = [] }) {
  if (examples.length === 0) {
    return null
  }

  return examples.map((ex, idx) => (
    <Text newLines={2} key={idx}>
      {ex.name && <Text newLines={2}>_{ex.name}_</Text>}
      {ex.summary && <Text newLines={2}>{ex.summary}</Text>}
      <CodeBlock language='json'>{JSON.stringify(ex.example, null, 2)}</CodeBlock>
    </Text>
  ))
}