/** @format */

import { React } from 'react'
import { Text, File, render } from '@asyncapi/generator-react-sdk'
import YAML from 'js-yaml'

const DEFAULT_PARAMS = {
  baseUrl: 'https://realestate.yodata.me/schema/',
  sortKeys: true,
  outputFormats: {
    json: {
      enabled: false,
      extension: '.json',
      basePath: '',
    },
    yaml: {
      enabled: false,
      extension: '.yaml',
      basePath: ''
    }
  }
}

export default function AsyncapiPage(props) {
  const { asyncapi, params } = props
  const { baseUrl, outputFormats } = Object.assign(DEFAULT_PARAMS, params)
  const schemaObject = asyncapi.json()
  const outputFiles = []
  Object.entries(outputFormats).forEach(([ format, options ]) => {
    if (options.enabled) {
      let fileName = 'asyncapi' + options.extension || `.format`
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
            sortKeys: false
          })
          break
        default:
          throw new Error(`${format} is not supported`)
      }
      fileContent = fileContent.replace('.schema.json', options.extension)
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
