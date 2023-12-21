import { globalFontFace, globalStyle } from '@vanilla-extract/css'

globalStyle(`*, *::before, *::after`, {
  boxSizing: `border-box`,
  margin: 0,
  padding: 0,
})

globalStyle(`p, strong, h1, h2, h3, h4, h5, h6`, {
  fontVariationSettings: `"wght" 400`,
})
