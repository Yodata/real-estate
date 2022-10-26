import { Text, File } from '@asyncapi/generator-react-sdk'
import { FrontMatter } from './FrontMatter'

const OperationListItem = props => {

}

export default function TopicPage (props) {
  const { channel, channelName, asyncapi } = props
  const pageTitle = channelName
  const fileName = pageTitle + '.md'
  return (
    <File name={fileName}>
      <FrontMatter params={{ title: pageTitle }} />
      <Text>
        # {channelName}
      </Text>
    </File>
  )
}
