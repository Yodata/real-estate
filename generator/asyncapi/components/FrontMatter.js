/* eslint-disable react/react-in-jsx-scope */
import { Text, render } from '@asyncapi/generator-react-sdk'

export function FrontMatter (props = {}) {
  const result = []
  Object.entries(props).forEach(([k, v]) => {
    result.push(`${k}: ${v}`)
  })
  return render(<Text newLines={2}>`---\n${result.join('\n')}---`</Text>)
}
