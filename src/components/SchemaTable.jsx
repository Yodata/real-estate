import React from 'react'
import { Link } from 'docz'
import entries from 'lodash/entries'

const COLUMNS = [
  { title: 'Property', key: 'name' },
  { title: 'Range / Description', key: 'range' }
]

const ListItem = ({ property = {} }) => (
  <tr>
    <td >
      {property.label}
    </td>
    <td>
      <div>{property.range || property.rangeIncludes}</div>
      {property.description &&
        <div dangerouslySetInnerHTML={{ __html: property.description.toString() }}></div>
      }
    </td>
  </tr>
)

export const PropertyTable = ({ items = [], columns = COLUMNS }) => {
  return (
    <table className="table">
      <thead>
        <tr>
        <th>Property</th>
        <th>Range / Description</th>
        </tr>
      </thead>
      <tbody>
          {entries(items).map(([key, value]) => <ListItem key={key} property={value} />)}
      </tbody>
    </table>
  )
}
