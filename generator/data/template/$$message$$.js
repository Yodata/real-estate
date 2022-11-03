////
/// @page template/$$message$$
/// @desc
////
/** @format */

import { React } from 'react'
import { Text, File } from '@asyncapi/generator-react-sdk'
import { mergeAllOf } from '../helpers/merge-schema-items'
import YAML from 'js-yaml'

const DEFAULT_PARAMS = {
  "baseUrl": "http://realestate.yodata.me/schema/",
  "sortProperties": true,
  "generate": {
    "schemas": true,
    "messages": true,
    "topics": false
  },
  "outputFormats": {
    "json": {
      "enabled": true,
      "extension": ".json",
      "basePath": ""
    },
    "yaml": {
      "enabled": true,
      "extension": ".yaml",
      "basePath": ""
    }
  }
}

export default function MessageDataGenerator(props) {
  const { messageName, params } = props
  console.log('params', params)
  const { baseUrl, sortProperties, outputFormats } = DEFAULT_PARAMS
  if (params?.generate?.messages === 'false') return null
  const contentType = props.message.contentType()
  const externalDocs = props.message.externalDocs()
  // parse message as plain JSON //
  const message = mergeAllOf(props.message)
  message.payload = mergeAllOf(message.payload)
  if (!message.headers && message?.payload?.properties?.data) {
    let { data, ...headers } = message.payload.properties
    message.headers = { type: 'object', properties: headers }
    message.payload = data
  }
  if (sortProperties === true && message?.payload?.properties) {
    let sortedProperties = {}
       Object.keys(message.payload.properties)
      .sort()
      .forEach(key => {
        sortedProperties[key] = message.payload.properties[key]
      })
    message.payload.properties = sortedProperties
  }
  const outputData = {
    $id: message.$id,
    messageId: message.messageId,
    title: message?.title,
    summary: message?.summary,
    contentType,
    externalDocs,
    headers: message?.headers,
    payload: message.payload
  }
  // write data files //
  const outputFiles = []
  Object.entries(outputFormats).forEach(([ format, options ]) => {
    if (options.enabled) {
      let fileName = `${messageName}${options.extension}`.replace('#','.')
      outputData.$id = `${baseUrl}${options.basePath}${fileName}`.replace('#','.')

      let fileContent = ''
      switch (format) {
        case 'json':
          fileContent = JSON.stringify(outputData, null, 2)
          break
        case 'yaml':
          YAML.replace
          fileContent = YAML.dump(outputData, {
            noRefs: true
          })
          break
        default:
          throw new Error(`${format} is not supported`)
      }
      fileContent = fileContent.replace('.schema.yaml', options.extension)
      fileContent = fileContent.replace('.schema.yaml', options.extension)
      outputFiles.push(
        <File name={fileName}>
          <Text>{fileContent}</Text>
        </File>
      )
    }
  })
  return outputFiles.length > 0 ? outputFiles : null
}
