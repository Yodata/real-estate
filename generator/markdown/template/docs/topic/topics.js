import { React } from 'react'
import { File } from '@asyncapi/generator-react-sdk'
import { FrontMatter } from '../../../components/FrontMatter'
import { Operation } from '../../../components/Operations'
import { Header } from '../../../components/common'

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
    <>
      <Header type={2}>{channelName} operations</Header>
      {operationsList}
    </>
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
