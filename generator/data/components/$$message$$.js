import { React } from 'react'
import { File, Text } from '@asyncapi/generator-react-sdk'
import Schema from '@asyncapi/parser/lib/models/schema'
import { SchemaHelpers } from '../helpers/schema'

export default function (props) {
  try {
    const { messageName, message } = props
    const response = {
      messageName,
      description: message.description(),
      type: message.constructor.name
    }
    if (message.payload()) {
      let payload = message.payload()
      if (payload.allOf() && payload.allOf().length > 0) {
        payload.allOf().forEach(schema => {
          payload = new Schema()
        })
      }

      response.payload = {
        objectType: payload.constructor.name,
        type: payload.type(),
        description: payload.description()
      }
      if (payload.properties()) {
        const properties = payload.properties()
        const propertyNames = Object.keys(properties)
        const payloadData = payload.property('data')
        let payloadDataProperties = false
        if (payloadData) {
          payloadDataProperties = payloadData.properties()
        }
        Object.assign(response.payload, { properties, propertyNames, payloadData, payloadDataProperties })
      }
    }
    return (
      <File name={`${messageName}.json`}>
        <Text>{JSON.stringify(response, null, 2)}</Text>
      </File>
    )
  } catch (e) {
    console.error(e.message + ':' + props.messageName)
  }
}
