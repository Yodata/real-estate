import { File, Text } from '@asyncapi/generator-react-sdk'

export default function ({ asyncapi }) {
  const messages = asyncapi.components().messages()
  const schemas = asyncapi.components().schemas()
  const topics = asyncapi.channels()
  const allSchemas = asyncapi.allSchemas()
  const json = asyncapi.json()
  const db = {
    topics: topics,
    messages: messages,
    schemas: allSchemas,
  }

  return ([
    <File name="asyncapi.json" >
      <Text>{JSON.stringify(json, null, 2)}</Text>
    </File>
    ,
    <File name="messages.json" >
      <Text>{JSON.stringify(messages, null, 2)}</Text>
    </File>
    ,
    <File name="allSchemas.json" >
      <Text>{JSON.stringify(allSchemas)}</Text>
    </File>
    ,
    <File name="topics.json" >
      <Text>{JSON.stringify(topics)}</Text>
    </File>
    ,
    <File name="schemas.json" >
      <Text>{JSON.stringify(schemas)}</Text>
    </File>
  ]
  )
}