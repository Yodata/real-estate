import { React } from 'react'
import { File, Text } from '@asyncapi/generator-react-sdk'
import { FrontMatter } from '../../../components/FrontMatter'
import { Operation } from '../../../components/Operations'
import { Header } from '../../../components/common'

export function ChannelOperations (props) {
  const { asyncapi, channel, channelName } = props
  // Human-readable override for header text only; filename still uses channelName.
  const displayName = (typeof channel.ext === 'function' && channel.ext('x-display-name')) || channelName
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
      <Header type={2}>{displayName} operations</Header>
      {operationsList}
      <DeprecatedMessages channel={channel} />
    </>
  )
}

// Renders a trailing "### {heading}" section with a bullet list of full topic
// names that are documented in the asyncapi but intentionally not wired into
// the channel's publish/subscribe operations. Opt-in via a channel extension:
//
//   x-deprecated-messages:
//     heading: These are not in use as of now
//     items:
//       - realestate/contact#activity
//       - realestate/contact#collectioncreate
//
function DeprecatedMessages ({ channel }) {
  const ext = typeof channel.ext === 'function' ? channel.ext('x-deprecated-messages') : undefined
  if (!ext || typeof ext !== 'object') return null
  const heading = ext.heading
  const items = Array.isArray(ext.items) ? ext.items : []
  if (!heading || items.length === 0) return null
  return (
    <>
      <Header type={3}>{heading}</Header>
      {items.map((item, i) => <Text key={i}>{`- **${item}**`}</Text>)}
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
