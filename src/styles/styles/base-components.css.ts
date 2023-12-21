import { style } from '@vanilla-extract/css'
import { fontStyles, fontWeights, fonts } from './typography.css'
console.log({ fonts })

export const layout = style({
  // padding: `16px`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,
  // gap: `16px`,
})

export const label = fontStyles.SpaceMono_SMALL

export const p = fontStyles.SpaceMono_MED

export const h3 = fontStyles.SpaceMono_MED
export const h2 = fontStyles.SpaceMono_LARGE

export const h1 = fontStyles.SpaceMono_XLARGE

export const ul = style({
  padding: 0,
  margin: 0,
})
