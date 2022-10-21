import { File, Text } from '@asyncapi/generator-react-sdk'
import { FrontMatter } from '../components/FrontMatter'
import { Info } from '../components/Info'


export default function AboutPage(props) {
  const { asyncapi, params = { title: 'About Standard Real Estate Events' } } = props
  return (
    <File name={'about.md'}>
      <FrontMatter params={params} />
      <Info asyncapi={asyncapi} params={params} />
    </File>
  )
}