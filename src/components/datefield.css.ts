import { style } from '@vanilla-extract/css'
import * as typography from '../styles/typography.css'
import { createTextStyle } from '@capsizecss/vanilla-extract'
import spaceMonoFontMetrics from '@capsizecss/metrics/spaceMono'

export const field = style({
  display: `inline-flex`,
  padding: `2px 4px`,
  borderRadius: `2px`,
  border: `1px solid lightgray`,
  background: `#f7f7f7`,
  ':focus-within': {
    borderColor: `lightblue`,
  },
})

export const placeholder = style({
  color: `lightblue`,
})

export const wrapper = style([
  {
    display: `flex`,
    fontFamily: `Space Mono`,
  },
  createTextStyle({
    fontMetrics: spaceMonoFontMetrics,
    fontSize: 12,
    leading: 16,
  }),
])

export const segment = style({
  padding: `0 2px`,
  fontVariantNumeric: `tabular-nums`,
  textAlign: `end`,
  ':focus': {
    color: `black`,
    background: `lightblue`,
    outline: `none`,
    borderRadius: `2px`,
  },
})
