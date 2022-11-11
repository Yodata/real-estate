import { React } from 'react'
import { File } from '@asyncapi/generator-react-sdk'
import { FrontMatter } from '../../../../components/FrontMatter'
import { Message } from '../../../../components/Message'
import '@asyncapi/parser'

export default function renderMessageFile(props) {
  const { asyncapi, messageName, message } = props
  const fileName = `${messageName}.md`.replace('#', '.')
  return (
    <File name={fileName}>
      <FrontMatter asyncapi={asyncapi} params={{ title: messageName }} />
      <Message message={message} />
    </File>
  )
}