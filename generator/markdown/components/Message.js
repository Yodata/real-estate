import { Text } from '@asyncapi/generator-react-sdk'
import { generateExample, getPayloadExamples, getHeadersExamples } from '@asyncapi/generator-filters'

import { Bindings } from './Bindings'
import { Extensions } from './Extensions'
import { Schema } from './Schema'
import { Tags } from './Tags'
import { Header, ListItem, Link, CodeBlock } from './common'

export function Message ({ message }) { // NOSONAR
  if (!message) {
    return null
  }

  // check typeof as fallback for older version than `2.4.0`
  const headers = message.headers()
  const payload = message.payload()
  const externalDocs = message.externalDocs()

  return (
    <>
      <Header type={2}>Message</Header>
      {message.summary() && (
        <Text newLines={2}>
          *{message.summary()}*
        </Text>
      )}
      {message.hasDescription() && (
        <Text newLines={2}>
          {message.description()}
        </Text>
      )}
      {externalDocs && (
        <Text newLines={2}>
          <Link href={externalDocs.url()}>
            {externalDocs.hasDescription() ? externalDocs.description() : 'Find more info here.'}
          </Link>
        </Text>
      )}
      {payload && (
        <>
          <Example type='payload' message={message} />
          <Header type={3}>Payload</Header>
          <Schema schema={payload} hideTitle />
        </>
      )}
      {headers && (
        <>
          <Examples type='headers' message={message} />
          <Header type={3}>Headers</Header>
          <Schema schema={headers} hideTitle />
        </>
      )}
      <Tools/>
      <Bindings
        name='Message specific information'
        item={message}
      />
      <Extensions name='Message extensions' item={message} />
      {message.hasTags() && (
        <Tags name='Message tags' tags={message.tags()} />
      )}
    </>
  )
}

function Example ({ type = 'headers', message }) {
  if (type === 'headers') {
    const ex = getHeadersExamples(message)
    if (ex) {
      return (
        <>
          <Header type={3}>Header Example(s)</Header>
          <Example examples={ex} />
        </>
      )
    }

    return (
      <>
        <Header type={3}>Header Example(s) (generated)</Header>
        <CodeBlock language='json'>{generateExample(message.headers().json())}</CodeBlock>
      </>
    )
  }

  const examples = getPayloadExamples(message)
  if (examples) {
    return (
      <>
        <Header type={3}>Payload Example(s)</Header>
        <Example examples={examples} />
      </>
    )
  }

  return (
    <>
      <Header type={3}>Payload Example(s) (generated)</Header>
      <Text newLines={2}>
        <CodeBlock language='json'>{generateExample(message.payload().json())}</CodeBlock>
      </Text>
    </>
  )
}

function Examples ({ examples = [] }) {
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


function Tools(message) {
  return (
    <>
      <Header type={3}>Tools</Header>
      <Text newLines={2}>
        <ListItem><Link href={`/tools/mock-data-generator`}>Mock Data Generator</Link></ListItem>
        <ListItem><Link href={`/tools/validate`}>Schema Validator</Link></ListItem>
      </Text>
    </>
  )
}
