import { DataFile } from '../components/DataFile';

export default function exportData(props) {
  const { asyncapi } = props
  const content = asyncapi.json()
  return (
    <DataFile pathName={'data.json'} data={content} />
  )
}
