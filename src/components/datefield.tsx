import * as React from 'react'
import { useDateFieldState } from 'react-stately'
import { useDateField, useDateSegment, useLocale } from 'react-aria'
import { createCalendar } from '@internationalized/date'
import * as styles from './datefield.css'
import clsx from 'clsx'

export function DateField(props) {
  const { locale } = useLocale()
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  })

  const ref = React.useRef()
  const { labelProps, fieldProps } = useDateField(props, state, ref)

  return (
    <div className={styles.wrapper}>
      <span {...labelProps}>{props.label}</span>
      <div {...fieldProps} ref={ref} className={styles.field}>
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
        {state.validationState === `invalid` && (
          <span aria-hidden="true">🚫</span>
        )}
      </div>
    </div>
  )
}

function DateSegment({ segment, state }) {
  const ref = React.useRef()
  const { segmentProps } = useDateSegment(segment, state, ref)

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={clsx({
        [styles.segment]: true,
        [styles.placeholder]: segment.isPlaceholder,
      })}
    >
      {segment.text}
    </div>
  )
}
