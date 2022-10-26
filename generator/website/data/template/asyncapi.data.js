import { React } from 'react'
import { File, Text, render } from '@asyncapi/generator-react-sdk'

export default function (props) {
  const args = Object.keys(props)
  console.log(`data generator called with [ ${args} ]`)
  const { asyncapi } = props
  const messages = asyncapi.components().messages()
  const schemas = asyncapi.components().schemas()
  const topics = asyncapi.channels()
  const allSchemas = asyncapi.allSchemas()
  const json = asyncapi.json()
  const db = {
    topics,
    messages,
    schemas: allSchemas
  }

  return ([
    <File key='asyncapi' name="asyncapi.json" >
      <Text>{JSON.stringify(json, null, 2)}</Text>
    </File>,
    <File key={'messages'} name="messages.json" >
      <Text>{JSON.stringify(messages, null, 2)}</Text>
    </File>,
    <File key='schemas' name="allSchemas.json" >
      <Text>{JSON.stringify(allSchemas)}</Text>
    </File>,
    <File key='topics' name="topics.json" >
      <Text>{JSON.stringify(topics)}</Text>
    </File>
  ]
  )
}
