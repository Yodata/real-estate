// @flow

export default function shrinkRdfNode(
  value: string | NamedNode | BlankNode | Literal,
): string {
  if (typeof value === 'string') {
    return value;
  }
  switch (value.termType) {
    case 'NamedNode':
    case 'BlankNode':
      return `<${value.value}>`;
    case 'Literal':
      if (typeof value.lang === 'string' && value.lang.length > 0) {
        return `"${value.value}"@${value.lang}`;
      }
      return value.value;
    default:
      console.error(value);
      throw new Error('shrinkRdfNode: unhandled value type', value);
  }
}
