import { File, Text } from '@asyncapi/generator-react-sdk'
import { FrontMatter } from '../../../asyncapi/components/FrontMatter'
import { Message } from '../../../asyncapi/components/Message'

const formatFileName = (messageId, extension) => String(messageId).replace('#', '.') + extension

export default function ({ asyncapi }) {
  const messages = asyncapi.allMessages()
  console.log('found ' + messages.length + ' messages')
  const messageFiles = []
  Object.entries(messages).forEach(([messageName, message]) => {
    messageFiles.push(
      <File name={messageName + '.md'}>
        <FrontMatter params={{ title: messageName }} />
        <Message message={message} />
      </File>
    )
  })
  return messageFiles
}

export function MessageFile (messageName, message) {
  const title = messageName
  const fileName = messageName + '.md'
  return (
    <File name={fileName}>
      <FrontMatter params={{ title }} />
      <Message asyncapi={asyncapi} message={message} messageName={messageName} />
    </File>
  )
}
