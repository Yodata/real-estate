import React from 'react'
import { useController } from 'react-hook-form'
import clsx from 'clsx'

const styles = {
  label: 'text-sm block',
  input: {
    container: 'block w-full mb-4',
    text: 'block w-full',
    password: 'block w-full',
    'datetime-local': 'block w-full',
    datetime: 'block w-full',
    select: 'form-input block w-full',
    checkbox: 'form-input',
    range: 'form-slider',
    number: 'form-input',
    url: 'form-input block w-full'
  },
}

export function Input(props) {
  const { control, name, required = true } = props
  const { field, fieldState } = useController({
    control,
    name,
    rules: { required },
  })
  const { type = 'text' } = props
  const descriptionId = `${field.name}_description`
  const labelText = props.label || field.name
  const helpText = props.caption || ''

  let inputStyle = clsx(
    styles.input[ type ],
    fieldState.error && 'border border-red-600'
  )


  return (
    <label htmlFor={field.name} className={styles.input.container}>
      <span className="text-s">{labelText}</span>
      <input
        type={type}
        control={props.control}
        name={field.name}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        placeholder={props.placeholder}
        className={inputStyle}
        ref={field.ref}
        aria-describedby={descriptionId}
        aria-invalid={fieldState.error?.message}
      />
      {helpText && (
        <div id={descriptionId} className="text-xs">
          {helpText}
        </div>
      )}
      {fieldState.error && (
        <div className="block text-red-600">{fieldState.error.message}</div>
      )}
    </label>
  )
}


export function Select(props) {
  const { control, name, required = true } = props
  const { field, fieldState } = useController({
    control,
    name,
    rules: { required },
  })
  const { type = 'text' } = props
  const descriptionId = `${field.name}_description`
  const labelText = props.label || field.name
  const helpText = props.caption || ''

  let inputStyle = clsx(
    styles.input[ type ],
    fieldState.error && 'border border-red-600'
  )


  return (
    <label htmlFor={field.name} className={styles.input.container}>
      <span className="text-s">{labelText}</span>
      <select
        type={type}
        control={props.control}
        name={field.name}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        placeholder={props.placeholder}
        className={inputStyle}
        ref={field.ref}
        aria-describedby={descriptionId}
        aria-invalid={fieldState.error?.message}
      >
      {props.options.map(v => (<option key={`${field.name}${v}}`} value={v}>{v}</option>))}
      </select>
      {helpText && (
        <div id={descriptionId} className="text-xs">
          {helpText}
        </div>
      )}
      {fieldState.error && (
        <div className="block text-red-600">{fieldState.error.message}</div>
      )}
    </label>
  )
}
