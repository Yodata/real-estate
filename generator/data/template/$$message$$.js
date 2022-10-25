import { File, Text } from '@asyncapi/generator-react-sdk'
import Schema from '@asyncapi/parser/lib/asyncapiSchemaFormatParser'
import {
  SchemaHelpers
} from '../helpers/schema'


export default function (props) {
  const { messageName, message } = props
  const response = {
    id: message.id(),
    messageName: messageName
  }
  if (message.payload()) {
    let payload = message.payload()
    response.payload = {
      properties: message.payload().json()
  }
  return (
    <File name={`${messageName}.json`}>
      <Text>{JSON.stringify(response, null, 2)}</Text>
    </File>
  )

}