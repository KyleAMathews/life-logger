import { fonts } from './typography.css'
import { createTextStyle } from '@capsizecss/vanilla-extract'

interface Props {
  id: FontFamilyId
  leading: number
  size: number
}

export function calcFontCss({ id, leading, size }: Props) {
  createTextStyle({
    fontMetrics: fonts[id].metrics,
    fontSize: size,
    leading,
  })
}
