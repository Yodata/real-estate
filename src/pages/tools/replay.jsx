import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Input, DatePicker } from '@/components/Forms'
import { Button} from '@/components/Button'
import clsx from 'clsx'
import axios from 'axios'

export default function ReplayUI({ className, ...props }) {
  const [apiResponse, setApiResponse] = useState('waiting')
  const formStyle = clsx('form-input', className)
  const errors = {
    target: 'This field is required',
  }
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
    <form name='replayForm' onSubmit={handleSubmit(onSubmit)} className={formStyle}>
      <Controller
        control={control}
        name="target"
        required={true}
        aria-invalid={errors.target}
        render={Input}
      />
      <br />
      <Controller control={control} name="apikey" render={Input} />
      <br />
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
        <div className='block w-70'>{apiResponse}</div>
        <div className='block w-30'><Button type={'submit'}>Submit</Button></div>
      </div>
    </form>
  )
}
