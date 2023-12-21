import { style, globalStyle } from '@vanilla-extract/css'

export const cell = style({
  cursor: `default`,
  textAlign: `center`,
})

export const disabled = style({
  color: `gray`,
})

export const selected = style({
  background: `lightblue`,
  color: `white`,
})

export const unavailable = style({
  color: `red`,
})

export const calendar = style({
  width: `220px`,
})

globalStyle(`${calendar} table`, {
  width: `100%`,
})

export const header = style({
  display: `flex`,
  alignItems: `center`,
  gap: `4px`,
  margin: `0 8px`,
})

globalStyle(`${header} h2`, {
  flex: `1`,
  margin: `0`,
})
