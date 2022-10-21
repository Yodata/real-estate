import { Text, File } from '@asyncapi/generator-react-sdk'
import { FrontMatter } from '../../components/FrontMatter'

const OperationListItem = props => {

}

export default function TopicPage (props) {
  const { channel, channelName, asyncapi } = props
  const pageTitle = channelName
  const fileName = pageTitle + '.md'
  return (
    <File name={fileName} >
      <FrontMatter asyncapi={asyncapi}  params={{title: pageTitle}} />
      <Text>
        # {channelName}
        ## publishing {channelName} events
        Publish events by HTTP POST to your own pods `/publish/` endpoint including the topic, recipient and message body.
      </Text>
    </File>
   )
}
