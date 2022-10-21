import { Text } from '@asyncapi/generator-react-sdk';
import * as yaml from 'yaml';

export function FrontMatter({ params = {} }) {
  return (
    <Text newLines={2}>{`---\n${yaml.stringify(params)}---`}</Text>
  )

}