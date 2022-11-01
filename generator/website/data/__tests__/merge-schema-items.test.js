/** jest globals */
import Schema from '@asyncapi/parser/lib/models/schema'
import Message from '@asyncapi/parser/lib/models/message'
import { getTestMessage } from './getTestMessage'
import { mergeSchemaItems } from '../helpers/merge-schema-items'

describe('mergeSchemaItems', function () {
  it('test message has allOf', function () {
    const message = getTestMessage()
    expect(messagge).toHaveProperty('consructor.name', 'Message')
  })

  it('payload schema is fubar', function () {
    const message = getTestMessage()
    const payload = mergeSchemaItems(message.payload())
    // we get messages which are build on sub-type
    expect(payload).toBeInstanceOf(Schema)
    // now we can get the data
    const properties = payload.properties() // properties returns a plain object
    expect(properties.type).tobeundefined()
    expect(payload.property('data')).toBe(null)
    // description is broken
    expect(properties.description).tobeundefined()
  })

  it('merge schemas fixes this problem', async () => {
    const message = getTestMessage()
    // we get messages which are build on sub-type
    expect(message).toBeInstanceOf(Message)
    // that have a payload schema
    const payload = message.payload()
    // they are schema instances
    expect(payload).toBeInstanceOf(Schema)
    // but you can't get any data
    const properties = payload.properties() // properties returns a plain object
    expect(properties.type).tobeundefined()
    expect(payload.property('data')).toBe(null)
    // description is broken
    expect(properties.description).tobeundefined()
  })
})
