import { React, useState, useRef } from 'react'
import { CodeEditor } from '@/components/CodeEditor'
import { Button } from '@/components/Button'
import axios from 'axios'

const styles = {
  success: 'text-green-600',
  error: 'text-red-600',
}

const defaultObjectType = 'PostalAddress'
const defaultObject = JSON.stringify(
  {
    type: defaultObjectType,
    streetNumber: '55 Gypsy Lane',
    addressLocality: 'Berkeley',
    addressRegion: 'California',
  },
  null,
  2
)

export default function ValidateSchemaObject(props) {
  const [schemaName, setSchemaName] = useState(defaultObjectType)
  const [validationMessage, setValidationMessage] = useState('')
  const [validationStatus, setValidationStatus] = useState('')

  const editorRef = useRef(null)

  function validate() {
    if (schemaName === '') {
      setValidationMessage('Sorry, we can not validate that at this moment. Please try again.')
      return
    }
    const textValue = editorRef.current.innerText
    if (isValidJson(textValue)) {
      const jsonValue = JSON.parse(textValue)
      const subject = jsonValue.topic || jsonValue.type
      setSchemaName(subject)
      axios.post('/api/validate', jsonValue).then((res) => {
        if (res.status === 200) {
          let { isValid, error, schemaName } = res.data
          console.log(res.data)
          if (isValid) {
            setValidationStatus('success')
            setValidationMessage(
              `That's a valid ${schemaName}! Congratulations!`
            )
          } else {
            setValidationStatus('error')
            if (error && error.message) {
              setValidationMessage(error.message)
            } else {
              setValidationMessage(
                `Sorry somthing unexpected happened. Please try again.`
              )
            }

          }
        }
      })
    }
  }

  function onCodeChange(code) {
    if (isValidJson(code)) {
      let json = JSON.parse(code)
      if (typeof json.topic === 'string' && json.topic.length > 0) {
        setSchemaName(json.topic)
        setValidationMessage('')
        setValidationStatus('')
        return
      } else if (typeof json.type === 'string' && json.type.length > 0) {
        setSchemaName(json.type)
        setValidationMessage('')
        setValidationStatus('')
        return
      }
    } else {
      setValidationStatus('error')
      setValidationMessage('your json is not valid')
      return
    }

  }

  return (
    <div>
      <h2>Schema Validation</h2>
      <div className="mb-5">
        validate any event message (with a topic) or schema object (with a type)
      </div>
      <div className={styles[validationStatus]}>
        <div className={styles[validationStatus]}>{validationStatus}</div>
        <div className={styles[validationStatus]}>{validationMessage}</div>
      </div>
      <CodeEditor
        initialValue={defaultObject}
        useRef={editorRef}
        handleCodeChange={onCodeChange}
      />
      <Button variant="primary" onClick={validate}>
        Validate
      </Button>
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
