import { render } from '@asyncapi/generator-react-sdk';
import { FrontMatter } from '@/components/FrontMatter';


describe('FrontMatter', () => {

  it('should render the front matter', async () => {
    a = Math.random()
    b = Math.random()
    c = Math.random()
    const params = { a, b, c }
    const props = {
      params
    }
    const epectedResult = `
    ---
    a: ${a}
    b: ${b}
    c: ${c}
    ---
    `


    const result = render(<FrontMatter params={params} />)
    expect(result.trim()).toEqual(expectedResult.trim());
  })

})
