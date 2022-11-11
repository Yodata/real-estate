import { Text } from '@asyncapi/generator-react-sdk';
import { generateExample } from '@asyncapi/generator-filters'
import { BlockQuote, CodeBlock } from './common';


// options (optional) - object Available options:
// skipNonRequired - boolean Don't include non-required object properties not specified in required property of the schema object
// skipReadOnly - boolean Don't include readOnly object properties
// skipWriteOnly - boolean Don't include writeOnly object properties
// quiet - boolean Don't log console warning messages

export function Example({ schema = {}, schemaName = '' }) {
  if (!schemaName) { return null; }
  let example
  if (typeof schema.hasExamples === 'function' && !schema.hasExamples()) {
    return Examples({ examples: schema.examples(), schemaName })
  }
  try {
    console.log('generating example for', schemaName);
    example = generateExample(schema.json(), { skipNonRequired: false, skipReadOnly: true, skipWriteOnly: false, quiet: false })
  } catch (e) {
    console.error('failed to generate example for', schemaName, e)
    example = JSON.stringify(schema.json(), null, 2)
  }
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