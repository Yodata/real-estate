import React, { useState, useRef, Fragment } from 'react'
import { useForm, Controller } from 'react-hook-form'
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
    options: messages,
    placeholder: 'select a topic',
    caption: undefined,
    required: true,
  }
}

export default function MockDataGUI(props) {
  const { className } = props
  const [apiResponse, setApiResponse] = useState('')
  const [topic, setTopic] = useState('select a topic')
  const formStyle = clsx('form-input', className)
  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields, submitCount, isValid },
  } = useForm({
    mode: 'change',
    useNativeValidation: true,
    defaultValues: {
      topic: '',
      // targeturl: '',
      // optionalsProbability: 1.0,
      // fixedProbability: false,
      // additionalProperties: false,
      // maxItems: 3,
      // maxDepth: 3,
    },
  })
  const frm = useRef(null, handleFrmChange)
  const editorRef = useRef(null)

  const onSubmit = (json) => {
    setTopic(json.topic)
    const _topic = topic.replace('#', '/')
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

  return (
    <>
      <h2>Create Fake Data</h2>
      <div className="prose">
        <p>{topic}</p>
      </div>
      <form name="MockInputForm" onSubmit={handleSubmit(onSubmit, onError)}>
        <Select
          {...formData.topic}
          control={control}
          onSelect={topicSelected}
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
