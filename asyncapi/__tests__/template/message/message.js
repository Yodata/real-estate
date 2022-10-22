import { File, Text } from '@asyncapi/generator-react-sdk'
import { FrontMatter } from '../../components/FrontMatter'
import { Message } from '../../components/Message'

const formatFileName = (messageId, extension) => String(messageId).replace('#', '.') + extension

export default function ({ asyncapi }) {
  const messages = asyncapi.allMessages()
  const messageFiles = []
  Object.entries(messages).forEach(([messageName, message]) => {
    messageFiles.push(
      <File name={message.messageId}>
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
