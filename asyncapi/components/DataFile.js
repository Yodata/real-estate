import { File } from '@asyncapi/generator-react-sdk';

export function formatData(data, type = 'json', options) {
  const _type = type.toLowerCase();
  switch (_type) {
    case 'json':
      if (typeof data === 'string') {
        return JSON.stringify(JSON.parse(data), null, 2)
      } else {
        return JSON.stringify(data, null, 2);
      }
  }
}


export function DataFile(props) {
  const { data = {}, type = 'json', pathName = `./data-${new Date().toISOString()}` } = props;

  // todo support other data types
  return (
    <File name={pathName}>{formatData(data, type, pathName)}</File>
  )
}