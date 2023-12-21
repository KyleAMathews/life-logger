import * as React from 'react'
import {
  useCalendar,
  useCalendarCell,
  useCalendarGrid,
  useLocale,
} from 'react-aria'
import { useCalendarState } from 'react-stately'
import { createCalendar, getWeeksInMonth } from '@internationalized/date'
import { Button } from './button'
import * as styles from './calendar.css'
import clsx from 'clsx'

export function Calendar(props) {
  const { locale } = useLocale()
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  })

  const ref = React.useRef()
  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar(props, state, ref)

  return (
    <div {...calendarProps} ref={ref} className={styles.calendar}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <Button {...prevButtonProps}>&lt;</Button>
        <Button {...nextButtonProps}>&gt;</Button>
      </div>
      <CalendarGrid state={state} />
    </div>
  )
}

function CalendarGrid({ state, ...props }) {
  const { locale } = useLocale()
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state)

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale)

  return (
    <table {...gridProps}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <CalendarCell key={i} state={state} date={date} />
                ) : (
                  <td key={i} />
                ),
              )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function CalendarCell({ state, date }) {
  const ref = React.useRef()
  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref)

  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={clsx({
          [styles.cell]: true,
          [styles.selected]: isSelected,
          [styles.disabled]: isDisabled,
          [styles.unavailable]: isUnavailable,
        })}
      >
        {formattedDate}
      </div>
    </td>
  )
}
