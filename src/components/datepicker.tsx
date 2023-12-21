import * as React from 'react'
import { useDatePicker } from 'react-aria'
import { useDatePickerState } from 'react-stately'

// Reuse the DateField, Popover, Dialog, Calendar, and Button from your component library.
import { Button, Calendar, DateField, Dialog, Popover } from './'

export function DatePicker(props) {
  const state = useDatePickerState(props)
  const ref = React.useRef()
  const { groupProps, labelProps, fieldProps, dialogProps, calendarProps } =
    useDatePicker(props, state, ref)

  return (
    <div style={{ display: `inline-flex`, flexDirection: `column` }}>
      <div {...labelProps}>{props.label}</div>
      <div {...groupProps} ref={ref} style={{ display: `flex` }}>
        <DateField {...fieldProps} />
      </div>
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="bottom start">
          <Dialog {...dialogProps}>
            <Calendar {...calendarProps} />
          </Dialog>
        </Popover>
      )}
    </div>
  )
}
