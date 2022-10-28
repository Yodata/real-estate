import clsx from 'clsx'

// rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400'

const styles = {
  textInput: 'w-full',
  datePicker: 'w-full',
  label: 'font-semibold text-slate-900',
}

export function Input({ className, field, ...props })  {
  const inputStyle = clsx(styles.textInput, className)
  const labelStyle = clsx(styles.label, className)
  return (
    <div>
      <label className={labelStyle} htmlFor={field.name}>{field.name}</label>
      <input type='text' className={inputStyle} {...field} />
    </div>
  )
}

export function DatePicker({ className, field, ...props }) {
  const inputStyle = clsx(styles.datePicker, className)
  const labelStyle = clsx(styles.label, className)
  return (
    <div>
      <label className={labelStyle} htmlFor={field.name}>{field.name}</label>
      <input type='datetime-local' className={inputStyle} {...field} />
    </div>
  )
}
