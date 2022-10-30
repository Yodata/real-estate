import React, { useState } from 'react'
import { Layout } from  '@/components/Layout'
import { useForm, Controller } from 'react-hook-form'
import { Input, DatePicker, InputController } from '@/components/Forms'
import { Button } from '@/components/Button'
import clsx from 'clsx'
import axios from 'axios'

export default function ReplayUI({ className, ...props }) {

  const [apiResponse, setApiResponse] = useState('waiting')
  const formStyle = clsx('form-input', className)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      target: 'https://{yourpodname}.dev.yodata.io/inbox/',
      apikey: '{your secret key}',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    },
  })

  const onSubmit = (json) => {
    axios.post('/api/replay', json).then((res) => {
      setApiResponse(`${res?.data?.actionStatus}: ${res?.data?.result}`)
    })
  }

  return (
    <Layout title={'Replay GUI'}>
      <h1>Replay Events</h1>
      <form
        name="replayForm"
        onSubmit={handleSubmit(onSubmit)}
        className={formStyle}
      >
        <InputController control={control} name="target" />
        <InputController control={control} name="api-key" />
        <InputController control={control} name="topicFilter" />
        <Controller
          control={control}
          name="startDate"
          required={true}
          render={DatePicker}
          aria-invalid={true}
        />
        <br />
        <Controller control={control} name="endDate" render={DatePicker} />
        <br />
        <div className="block w-full">
          <div className="w-70 block">{apiResponse}</div>
          <div className="w-30 block">
            <Button type={'submit'}>Submit</Button>
          </div>
        </div>
      </form>
    </Layout>
  )
}
