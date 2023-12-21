import * as React from 'react'
import { useDialog } from 'react-aria'

export function Dialog({ title, children, ...props }) {
  const ref = React.useRef()
  const { dialogProps, titleProps } = useDialog(props, ref)

  return (
    <div {...dialogProps} ref={ref} style={{ padding: 30 }}>
      {title && (
        <h3 {...titleProps} style={{ marginTop: 0 }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}
