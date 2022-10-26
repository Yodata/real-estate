import { render } from '@asyncapi/generator-react-sdk'
import { FrontMatter } from '../../components/FrontMatter'

describe('FrontMatter', () => {
  it('should render the front matter', () => {
    expect.assertions(1)
    const a = Math.random().toString()
    const b = Math.random().toString()
    const c = Math.random().toString()
    const props = { a, b, c }
    const expectedResult = `
    ---
    a: ${a}
    b: ${b}
    c: ${c}
    ---
    `
    const result = render(<FrontMatter { ...props }/>)
    console.dir(result)
    return expect(result.trim()).toContain(expectedResult.trim())
  })
})
