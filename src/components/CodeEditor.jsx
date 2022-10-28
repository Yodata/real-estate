import React, { useState, useCallback } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import github from 'prism-react-renderer/themes/github'
import { useEditable } from 'use-editable'

export function CodeEditor({
  useRef,
  initialValue = '',
  language = 'json',
  handleCodeChange,
  ...props
}) {
  const [code, setCode] = useState(initialValue)
  const onEditableChange = useCallback((code) => {
    // update the current code state
    setCode(code.slice(0, -1))
    if (typeof handleCodeChange === 'function') {
      handleCodeChange(code)
    }
  }, [])

  useEditable(useRef, onEditableChange, {
    disabled: false,
    indentation: 2,
  })

  return (
    <Highlight {...defaultProps} theme={github} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style} ref={useRef}>
          {tokens.map((line, i) => (
            <React.Fragment key={i}>
              {line
                .filter((token) => !token.empty)
                .map((token, key) => (
                  // eslint-disable-next-line react/jsx-key
                  <span {...getTokenProps({ token, key })} />
                ))}
              {'\n'}
            </React.Fragment>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
