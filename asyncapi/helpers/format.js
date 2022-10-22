export class FormatHelpers {
  /**
   * Wrap input string to markdown's inline code
   *
   * @param  {String} `value` The string to wrap
   * @return {String}
   */
  static inlineCode (value) {
    if (
      value === null ||
      value === undefined ||
      typeof value === 'object' ||
      typeof value === 'function' ||
      value === ''
    ) return ''
    return `\`${value}\``
  }

  /**
   * Slugify (change value to appropriate hash) the url part of a markdown link.
   *
   * @param  {String} `str` The string to slugify
   * @return {String}
   */
  static slugify (str) {
    str = this.getTitle(str)
    str = str.toLowerCase()

    // `split(...).join(...)` is faster than `replace(..., ...)`
    // for spaces
    str = str.split(' ').join('-')
    // for tabs
    str = str.split(/\t/).join('--')
    // for html tags
    str = str.split(/<\/?[^>]{1,100}>/).join('')
    // for special characters from ASCII (part 1)
    // eslint-disable-next-line no-useless-escape
    str = str.split(/[|$&`~=\\\/@+*!?({[\]})<>.,;:'"^]/).join('')
    // for special characters from ASCII (part 2)
    str = str.split(/[。？！，、；：【】（）〔〕［］﹃﹄“ ”‘’﹁﹂—…－～《》〈〉「」]/).join('')

    return str
  }

  /**
   * Get the "title" from a markdown link
   *
   * @param  {String} `str` The string to retrieve title
   * @return {String}
   */
  static getTitle (str) {
    // check if in `str` is "title" from a markdown link (use `(` char at the end for easy markdown link checking)
    if ((/^\[[^\]]+\]\(/).test(str)) {
      // retrieve "title" from a markdown link
      const m = (/^\[([^\]]+)\]/).exec(str)
      if (m) return m[1]
    }
    return str
  }

  static escapePipes (str) {
    return (str || '').replace(/\|/g, '\\|')
  }

  static rangeSpec (property) {
    if (typeof property === 'object' && property['x-range']) {
      const range = property['x-range']
      let spec
      switch (typeof range) {
        case 'string':
          spec = `[${range}](/types/${range})`
          break
        case 'object':
          spec = range.map(range => `[${range}](/types/${range})`).join(', ')
      }
      return `<br/>RANGE: ${spec}`
    }
  }

  static typeSpec (prop) {
    if (typeof prop === 'undefined') {
      return ''
    }
    let result
    const { type, format, oneOf, anyOf } = prop
    const kind = prop['x-kind']
    const range = oneOf || anyOf

    if (kind) {
      result = `[${kind}](/types/${kind})`
    }

    if (!result && type) {
      result = format ? `${type}&lt;${format}&gt; ` : type
    }

    if (!result && Array.isArray(range)) {
      result = range.map(typeSpec).join('&#124;')
    }
    return result || '*'
  }
}
