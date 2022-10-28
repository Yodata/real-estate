import { React, useState, useRef } from 'react';
import { Button } from '@/components/Button';
import { CodeEditor } from '@/components/CodeEditor';
import axios from 'axios';

const defaultObject = JSON.stringify({
  "type": "PostalAddress",
  "streetNumber": "55 Gypsy Lane",
  "addressLocality": "Berkeley",
  "addressRegion": "California"
}, null, 2)

export default function ValidateSchemaObject(props) {
  const [ schemaStatus, setSchemaStatus ] = useState('')
  const [ validationStatus, setValidationStatus ] = useState('')


  const editorRef = useRef(null)

  const onSubmit = (v) => {
    const text = editorRef.current.innerText
    console.log('currentValue=', text)
    console.log('isValidJson=', isValidJson(text))
    // axios.post('/api/validate', json).then((res) => {
    //   setApiResponse(`${res?.data?.actionStatus}: ${res?.data?.result}`)
    // })
  }

  function onCodeChange(code) {
    if (isValidJson(code)) {
      let json = JSON.parse(code)
      let hasTopic = (typeof json.topic === 'string' && json.topic.length > 0)
      let hasType = (typeof json.type === 'string' && json.type.length > 0)
      if (hasTopic) {
        setSchemaStatus(json.topic)
      } else if (hasType) {
        setSchemaStatus(json.type)
      } else {
        setSchemaStatus('')
        setValidationsStatus('Your json must have a topic or type')
      }
    }
    setSchemaStatus('')
    setValidationStatus('Your json is not valid')
  }

  return (
    <div>
      <h2>Schema Validation</h2>
      <div className='mb-5'>validate any event message (with a topic) or schema object (with a type)</div>
      <div className='mb-5 text-red-500'>{schemaStatus}</div>
      <div className='mb-5 text-red-500'>{validationStatus}</div>
      <CodeEditor initialValue={defaultObject} useRef={editorRef} handleCodeChange={onCodeChange} />
      <button className='btn btn-primary' onClick={onSubmit}>Validate</button>
    </div>
  )
}

function isValidJson(value) {
  try {
    JSON.parse(value)
    return true
  } catch (e) {
    return false
  }
}
