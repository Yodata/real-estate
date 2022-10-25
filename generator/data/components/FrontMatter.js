import { React } from 'react'
import { Text, render } from '@asyncapi/generator-react-sdk'

export function FrontMatter (props) {
  const { params = {} } = props
  const result = ['---']
  Object.entries(params).forEach(([k, v]) => {
    result.push(`${k}: ${v}`)
  })
  result.push('---')
  return result.map(s => <Text key={s}>{s}</Text>)
}
