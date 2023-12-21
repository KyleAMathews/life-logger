import { style } from '@vanilla-extract/css'
export const layout = style({
  width: `1366px`,
  margin: `0 auto`,
})

export const header = style({
  display: `flex`,
  alignItems: `center`,
  gap: 16,
})

export const entriesList = style({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,
  gap: 8,
})

export const entryItem = style({
  display: `grid`,
  gridTemplateColumns: `repeat(4, 1fr)`,
  gridTemplateRows: `1fr`,
  gridColumnGap: 8,
  gridRowGap: 0,
})

export const avatarImg = style({
  height: 24,
  width: 24,
})
