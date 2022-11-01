import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Input, DatePicker } from '@/components/Forms'
import { Button } from '@/components/Button'
import clsx from 'clsx'
import axios from 'axios'

const content = {
  target: {
    name: 'target',
    type: 'text',
    placeholder: 'https://dave.bhhs.dev.yodata.io/inbox/',
    caption: 'the url of the container where you want to replay messages',
    required: true,
  },
  apikey: {
    name: 'apikey',
    type: 'password',
    required: true,
  },
  filter: {
    name: 'filter',
    label: 'topic-filter',
    type: 'text',
    required: false,
    placeholder: 'realestate/contact#add',
    caption: '(optional) only replay topic events',
  },
  startDate: {
    name: 'startDate',
    type: 'datetime-local',
    required: false,
  },
  endDate: {
    name: 'endDate',
    type: 'datetime-local',
    required: false,
  },
}

export default function ReplayUI(props) {
  const { className } = props

  const [apiResponse, setApiResponse] = useState('waiting')
  const formStyle = clsx('form-input', className)
  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields, submitCount, isValid },
  } = useForm({
    useNativeValidation: true,
    defaultValues: {
      target: '',
      apikey: '',
      filter: '',
      startDate: '2022-10-28T23:45',
      endDate: '2022-10-29T23:45',
    },
  })

  const onSubmit = (json) => {
    axios
      .post('/api/replay', json)
      .then((res) => {
        setApiResponse(`${res?.data?.actionStatus}: ${res?.data?.result}`)
      })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.error(error)
        setApiResponse('SOMETHING BAD HAPPENED')
      })
  }

  const onError = (input) => {
    console.log('ERROR', errors)
    setApiResponse(JSON.stringify(errors))
  }

  return (
    <>
      <h1>Replay Events</h1>
      <div>{apiResponse}</div>
      <form name="replayForm" onSubmit={handleSubmit(onSubmit, onError)}>
        <Input {...content.target} control={control} />
        <Input {...content.apikey} control={control} />
        <Input {...content.startDate} control={control} />
        <Input {...content.endDate} control={control} />
        <Input {...content.filter} control={control} />
        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}
