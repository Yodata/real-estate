import { React } from 'react'
import { Text, File } from '@asyncapi/generator-react-sdk'
import { FrontMatter } from '../components/FrontMatter'
import { Operations } from '../components/Operations'

export default function TopicPage (props) {
  const pageTitle = 'Topics'
  const fileName = String(pageTitle).toLowerCase() + '.md'
  return (
    <File name={fileName}>
      <FrontMatter params={{ title: pageTitle }} />
      <Operations {...props} />
    </File>
  )
}
