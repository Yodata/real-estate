import { Text } from '@asyncapi/generator-react-sdk'


export function FrontMatter(props = {}) {
  const result = []
  Object.entries(props).forEach(([ k, v ]) => {
    result.push(`${k}: ${v}`)
  })
  return <Text newLines={2}>`---\n${ result.join('\n') }---`</Text>
}
