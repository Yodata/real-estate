import { React } from 'react'
import { Text, File } from '@asyncapi/generator-react-sdk'
import { FrontMatter } from '../components/FrontMatter'
import { Operations } from '../components/Operations'

export default function TopicPage(props) {
  const { schemaName, schema, api: asyncapi } = props
  if (typeof schemaName !== 'string') {
    console.error(`NO_NAME`, schema)
  } else {
    return (
      <File name={`${schemaName}.json`}>
        <Text>{schema.json()}</Text>
      </File>
    )
  }
}
