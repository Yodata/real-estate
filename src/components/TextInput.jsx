import React from 'react'
import clsx from 'clsx'

export default function TextInput({ className, ...props }) {
  return <input type={'text'} className={className} {...props} />
}
