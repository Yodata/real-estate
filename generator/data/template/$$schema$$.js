/** @format */

import { React } from 'react'
import { Text, File, render } from '@asyncapi/generator-react-sdk'
import { mergeAllOf } from '../helpers/merge-schema-items'
import YAML from 'js-yaml'

const DEFAULT_PARAMS = {
  baseUrl: 'https://realestate.yodata.me/schema/',
  sortKeys: {},
  outputFormats: {
    json: {
      enabled: true,
      extension: '.json',
      basePath: '',
    },
    yaml: {
      enabled: true,
      extension: '.yaml',
      basePath: '',
    },
  },
}

export default function TopicPage(props) {
  const { schemaName, schema, params } = props
  const { baseUrl, outputFormats } = Object.assign(DEFAULT_PARAMS, params)
  const schemaObject = mergeAllOf(schema)
  const outputFiles = []
  Object.entries(outputFormats).forEach(([ format, options ]) => {
    if (options.enabled) {
      let fileName = `${schemaName}${options.extension}`
      const uri = `${baseUrl}${options.basePath}${fileName}`
      let fileContent = ''
      schemaObject.$id = uri
      switch (format) {
        case 'json':
          fileContent = JSON.stringify(schemaObject, null, 2)
          break
        case 'yaml':
          YAML.replace
          fileContent = YAML.dump(schemaObject, {
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
