import React from 'react'
import clsx from 'clsx'

export default function Table(props) {
  const { childen, className } = props
  return <table className={className}>{childen}</table>
}
