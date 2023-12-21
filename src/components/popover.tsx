import * as React from 'react'
import { DismissButton, Overlay, usePopover } from 'react-aria'

export function Popover({ children, state, ...props }) {
  const ref = React.useRef()
  const { popoverRef = ref } = props
  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef,
    },
    state,
  )

  return (
    <Overlay>
      <div {...underlayProps} style={{ position: `fixed`, inset: 0 }} />
      <div
        {...popoverProps}
        ref={popoverRef}
        style={{
          ...popoverProps.style,
          background: `white`,
          border: `1px solid gray`,
        }}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  )
}
