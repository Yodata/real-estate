import { File, Text } from '@asyncapi/generator-react-sdk'
import { FrontMatter } from '../../asyncapi/components/FrontMatter'
import { Operation } from '../../asyncapi/components/Operations'

export function ChannelOperations (props) {
  const { asyncapi, channel, channelName } = props
  const operationsList = []
  if (channel.hasPublish()) {
    operationsList.push(
      <Operation
        key={`pub-${channelName}`}
        type='publish'
        asyncapi={asyncapi}
        operation={channel.publish()}
        channelName={channelName}
        channel={channel}
      />
    )
  }
  if (channel.hasSubscribe()) {
    operationsList.push(
      <Operation
        key={`sub-${channelName}`}
        type='subscribe'
        asyncapi={asyncapi}
        operation={channel.subscribe()}
        channelName={channelName}
        channel={channel}
      />
    )
  }
  return (
    <Text newLines={2}>
      ## Operations

      {operationsList}
    </Text>
  )
}

export default function Channels ({ asyncapi }) {
  const channels = asyncapi.channels()
  if (!Object.keys(channels).length) {
    return null
  }

  const channelPages = []

  // get all publish messages
  Object.entries(channels).forEach(([channelName, channel]) => {
    const pathName = `${channelName}.md`

    channelPages.push(
      <File name={pathName}>
        <FrontMatter
          params={{ title: channelName }}
        />
        <ChannelOperations
          asyncapi={asyncapi}
          channelName={channelName}
          channel={channel}
        />
      </File>
    )
  })

  return channelPages
}
