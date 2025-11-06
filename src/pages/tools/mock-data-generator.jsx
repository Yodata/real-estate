import React, { useState, useRef, Fragment } from 'react'
import { useForm, Controller, useWatch } from 'react-hook-form'
import { Select, Input } from '@/components/Forms'
import { Button } from '@/components/Button'
import Highlight, { defaultProps } from 'prism-react-renderer'
import clsx from 'clsx'
import axios from 'axios'

const messages = [
  'award#create',
  'award#delete',
  'award#seriescreate',
  'award#seriesdelete',
  'award#seriesupdate',
  'award#teamcreate',
  'award#teamdelete',
  'award#teammemberadd',
  'award#teammemberremove',
  'award#teamupdate',
  'award#update',
  'contact#activity',
  'contact#add',
  'contact#collectioncreate',
  'contact#collectiondelete',
  'contact#collectionmemberadd',
  'contact#collectionmemberremove',
  'contact#comment',
  'contact#delete',
  'contact#plancreate',
  'contact#plandelete',
  'contact#update',
  'franchise#transactionreport',
  'lead#accept',
  'lead#add',
  'lead#asssign',
  'lead#reject',
  'lead#retract',
  'lead#update',
  'listing#delete',
  'listing#update',
  'marketing#create',
  'marketing#delete',
  'marketing#memberadd',
  'marketing#memberremove',
  'marketingpreferences#subscribe',
  'marketingpreferences#unsubscribe',
  'profile#add',
  'profile#serviceareaadd',
  'profile#teamcreate',
  'profile#teamdelete',
  'profile#teammemberadd',
  'profile#teammemberremove',
  'profile#update',
  'servicearea#create',
  'servicearea#delete',
  'servicearea#update',
  'team#create',
  'team#delete',
  'website#askquestion',
  'website#listingoffer',
  'website#propertysearchsave',
  'website#register',
  'website#requestappointment',
  'website#requestshowing',
  'website#saveproperty',
  'website#searchproperties',
  'website#shareproperty',
  'website#sharepropertyvaluereport',
  'website#viewproperty',
  'website#viewpropertyvaluereort',
]

const noOfMessagesOptions = [
  1,2,3,4,5,6,7,8,9,10
]
/*
  topic: '',
  targeturl: '',
  optionalsProbability: 1.0,
  fixedProbability: false,
  additionalProperties: false,
*/

const formData = {
  topic: {
    name: 'topic',
    type: 'select',
    options: [],
    // placeholder: 'select a topic',
    caption: undefined,
    required: true,
  },
  numberOfMessages:{
    name: 'numberOfMessages',
    type: 'select',
    options: noOfMessagesOptions,
    placeholder: 'select number of messages to generate',
    caption: undefined,
    required: true,
  }
}

export default function MockDataGUI(props) {
  const { className } = props
  const [apiResponse, setApiResponse] = useState('')
  const [topic, setTopic] = useState('select a topic')
  const [numberOfMessages, setNumberOfMessages] = useState('1')
  const formStyle = clsx('form-input', className)
  const [isValidated, setIsValidated] = useState(false);
  const [validationError, setValidationError] = useState('');
  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields, submitCount, isValid },
  } = useForm({
    mode: 'change',
    useNativeValidation: true,
    defaultValues: {
      topic: '',
      numberOfMessages: 1,
      // targeturl: '',
      // optionalsProbability: 1.0,
      // fixedProbability: false,
      // additionalProperties: false,
      // maxItems: 3,
      // maxDepth: 3,
    },
  })
  
  const pod = useWatch({ control, name: 'pod' })
const apikey = useWatch({ control, name: 'apikey' })
  const frm = useRef(null, handleFrmChange)
  const editorRef = useRef(null)
 const [dynamicTopicOptions, setDynamicTopicOptions] = useState([]);
React.useEffect(() => {
  if (!pod || !apikey) return;

  const isValidPod = pod.startsWith('https://') && pod.includes('.bhhs.hsfaffiliates.com');
  if (!isValidPod) {
    setIsValidated(false);
    setValidationError('Pod must start with https:// and contain .bhhs.hsfaffiliates.com');
    return;
  }

  async function validateAndFetch() {
    try {
      const res = await axios.get('https://dev.bhhs.hsfaffiliates.com/settings/subscriptions', {
        headers: { 'x-api-key': apikey }
      });

      const podName = extractPodName(pod);
      const topics = getSubscriptionsForPod(res.data, podName);

      setDynamicTopicOptions(topics); // NEW: store topics
      setIsValidated(true);
      setValidationError('');

    } catch (err) {
      setIsValidated(false);
      setValidationError('Invalid API Key or Unauthorized.');
    }
  }

  validateAndFetch();
}, [pod, apikey]);

function extractPodName(pod) {
  return pod
    .replace('https://', '')
    .split('.')[0]; // take the first section
}
function getSubscriptionsForPod(subscriptions, podName) {
  const match = subscriptions.items.find(item =>
    item.agent.includes(`${podName}.dev.bhhs.hsfaffiliates.com`)
  );

  if (!match) return [];

  return match.subscribes.map(sub => sub.replace('realestate/', ''));
}
//   async function validateCredentials(pod, apikey) {
//   // 1) Pod format validation
//   const isValidPod = pod.startsWith('https://') && pod.includes('.bhhs.hsfaffiliates.com');

//   if (!isValidPod) {
//     setIsValidated(false);
//     setValidationError('Pod must start with https:// and contain .bhhs.hsfaffiliates.com');
//     return;
//   }

//   try {
//     // 2) Validate API Key by hitting Subscriptions endpoint
//     const data = await axios.get('https://dev.bhhs.hsfaffiliates.com/settings/subscriptions', {
//       headers: {
//         'x-api-key': "R1BywylDleLpjXFDODgDFJ1Ni3UFbfb2UMfcMSRtuM",
//       }
//     });
//    console.log('Validation response data:', data);

//     setIsValidated(true);
//     setValidationError('');
//   } catch (err) {
//     setIsValidated(false);
//     setValidationError('Invalid API key or unauthorized access.');
//   }
// }
  const content = {
  target: {
    name: 'pod',
    type: 'text',
    placeholder: 'https://<pod>.dev.bhhs.hsfaffiliates.com/',
    caption: 'vendor pod name',
    required: true,
  },
  apikey: {
    name: 'apikey',
    type: 'password',
    placeholder: 'Un4omdlDleLpjXFDODgnif4b5nw3lfb2UunilnRtuM',
    required: true,
    caption: 'dev x-api-key of the vendor',
  },
}

  const onSubmit = (json) => {
   setTopic(json.topic);
  const _topic = json.topic.replace('#', '/');
    const target = `/api/schema/mock/${_topic}`
    axios
      .get(target)
      .then((res) => {
        let code = JSON.stringify(res.data, null, 2)
        setApiResponse(code)
      })
      .catch((error) => {
        console.error(error)
        setApiResponse(error.message)
      })
  }

  const onError = (input) => {
    console.error('ERROR', errors)
    setApiResponse(JSON.stringify(errors))
  }




  function handleFrmChange(input) {
    console.log('FORM_CHANGE', input)
  }

  function topicSelected(e) {
    console.log('TOPIC_SELECTED', e.target.value)
    setTopic(e.target.value)
  }
  function numberOfMessagesSelected(e) {
    console.log('No of Messages to Generate', e.target.value)
    setNumberOfMessages(e.target.value)
  }

  return (
    <>
      <h2>Create Fake Data</h2>
      {/* <div className="prose">
        <p>{topic}</p>
      </div> */}
      <form name="MockInputForm" onSubmit={handleSubmit(onSubmit, onError)}>
       <Input
  {...content.target}
  control={control}
 
/>

<Input
  {...content.apikey}
  control={control}
  
/>
         <Select
  name="topic"
  type="select"
  options={dynamicTopicOptions}
  control={control}
  onChange={topicSelected}
/>
        <Select
          {...formData.numberOfMessages}
          control={control}
          onSelect={numberOfMessagesSelected}
        />
        <Button type="submit">Submit</Button>
      </form>
      <Highlight
      {...defaultProps}
      code={apiResponse}
      language={'json'}
      theme={undefined}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={className} style={style}>
          <code>
            {tokens.map((line, lineIndex) => (
              <Fragment key={lineIndex}>
                {line
                  .filter((token) => !token.empty)
                  .map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                {'\n'}
              </Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
    </>
  )
}
