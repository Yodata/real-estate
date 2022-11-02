/** @format */

import { React } from 'react'
import { Text, File, render } from '@asyncapi/generator-react-sdk'
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

export default function TopicPage(props) {
  const { schemaName, schema, params } = props
  if (params?.generate?.schemas === false) return null

  const { baseUrl, sortProperties, outputFormats } = Object.assign(DEFAULT_PARAMS, params)
  const jsonSchema = mergeAllOf(schema)
  if (sortProperties === true && jsonSchema?.properties) {
    let sortedProperties = {}
       Object.keys(jsonSchema.properties)
      .sort()
      .forEach(key => {
        sortedProperties[key] = jsonSchema.properties[key]
      })
    jsonSchema.properties = sortedProperties
  }
  const outputFiles = []
  Object.entries(outputFormats).forEach(([ format, options ]) => {
    if (options.enabled) {
      let fileName = `${schemaName}${options.extension}`
      const uri = `${baseUrl}${options.basePath}${fileName}`
      let fileContent = ''
      jsonSchema.$id = uri
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
