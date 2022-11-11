/** @format */

import { React } from 'react'
import { Text, File, render } from '@asyncapi/generator-react-sdk'
import { mergeAllOf } from '../../helpers/merge-schema-items'
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

export default function JsonSchemaDoc(props) {
  const { schemaName, schema, params } = props
  if (params?.generate?.schemas === false) return null


  const { baseUrl, sortProperties, outputFormats } = DEFAULT_PARAMS
  const jsonSchema = mergeAllOf(schema)
  jsonSchema.properties = mergeAllOf(jsonSchema.properties)
  // remove anonymous schemas-ids
  Object.entries(jsonSchema.properties).forEach(([ key, value ]) => {
    if (typeof value === 'object' && value[ 'x-parser-schema-id' ]) {
      if (value[ 'x-parser-schema-id' ].startsWith('<anonymous-schema-')) {
        delete value[ 'x-parser-schema-id' ]
      }
    }
  })
  if (sortProperties === true && jsonSchema?.properties) {
    let sortedProperties = {}
       Object.keys(jsonSchema.properties)
      .sort()
         .forEach(key => {
           let value = jsonSchema.properties[ key ]
           let schemaId = value['x-parser-schema-id']
           if (String(schemaId).startsWith('<anonymous-schema-')) {
             delete value[ key ]
           }
        sortedProperties[key] = value
      })
    jsonSchema.properties = sortedProperties
  }
  const outputFiles = []
  Object.entries(outputFormats).forEach(async ([ format, options ]) => {
    if (options.enabled) {
      let fileName = `${schemaName}${options.extension}`.replace('#','.')
      jsonSchema.$id = `${baseUrl}${options.basePath}${fileName}`.replace('#','.')

      let fileContent = ''
      switch (format) {
        case 'json':
          fileContent = JSON.stringify(jsonSchema, null, 2)
          break
        case 'yaml':
          YAML.replace
          fileContent = YAML.dump(jsonSchema, {
            noRefs: true,
            sortKeys: (options.sortKeys === true) ? true : false
          })
          break
        default:
          throw new Error(`${format} is not supported`)
      }
      if (format !== 'markdown') {
        fileContent = fileContent.replace('.schema.yaml', options.extension)
        fileContent = fileContent.replace('.schema.yaml', options.extension)
      }
      outputFiles.push(
        <File name={fileName}>
          <Text>{fileContent}</Text>
        </File>
      )
    }
  })
  return outputFiles.length > 0 ? outputFiles : null
}
