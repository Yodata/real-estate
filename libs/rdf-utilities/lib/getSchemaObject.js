// @ts-check

const store = {
  getState: () => {
    throw new Error('not implemented')
  }
}

export default function getSchemaObject (id) {
  const state = store.getState()
  if (state && state.schema && state.schema.index[id]) {
    return state.schema.index[id]
  }
  throw new Error(`SchemaObject not found ${id}`)
}
