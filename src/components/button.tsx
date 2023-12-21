import * as React from 'react'
import { useButton } from 'react-aria'

export function Button(props) {
  const ref = React.useRef()
  const { buttonProps } = useButton(props, ref)
  console.log({ buttonProps, props })
  return (
    <button style={props.style} {...buttonProps} ref={ref}>
      {props.children}
    </button>
  )
}
