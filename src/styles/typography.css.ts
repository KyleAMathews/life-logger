import { FontMetrics } from "@capsizecss/core"
import spaceMonoFontMetrics from "@capsizecss/metrics/spaceMono"
import { createTextStyle } from "@capsizecss/vanilla-extract"
import { style } from "@vanilla-extract/css"

interface Meta {
  fallback: string
  file: string
  format: string
  metrics: FontMetrics
  name: string
  wghtRange: string
  wghts: {
    [key: string]: number
  }
}

type FontFamilyId = `SpaceMono`

type Fonts = Record<FontFamilyId, Meta>

const FONT_DIR = `/fonts`

export const fonts: Fonts = {
  SpaceMono: {
    fallback: `sans-serif`,
    format: `truetype-variations`,
    metrics: spaceMonoFontMetrics,
    name: `Space Mono`,
    wghtRange: `100 900`,
    wghts: {
      "400": 400,
      "700": 700,
    },
  },
}

// https://type-scale.com
// Major Third
// base: 16
const typeScale = {
  s: 12,
  m: 14,
  l: 18,
  xl: 24,
}

interface Props {
  id: FontFamilyId
  leading: number
  size: number
}

function calcFontCss({ id, leading, size }: Props) {
  return style([
    createTextStyle({
      fontMetrics: fonts[id].metrics,
      fontSize: size,
      leading,
    }),
    {
      fontFamily: `"${fonts[id].name}", ${fonts[id].fallback}`,
    },
  ])
}

type StyleId =
  | `SpaceMono_SMALL`
  | `SpaceMono_MED`
  | `SpaceMono_LARGE`
  | `SpaceMono_XLARGE`

export const fontStyles: Record<StyleId, string> = {
  SpaceMono_SMALL: calcFontCss({
    id: `SpaceMono`,
    leading: 16.5,
    size: typeScale.s,
  }),
  SpaceMono_MED: calcFontCss({
    id: `SpaceMono`,
    leading: 21,
    size: typeScale.m,
  }),
  SpaceMono_LARGE: calcFontCss({
    id: `SpaceMono`,
    leading: 25,
    size: typeScale.l,
  }),
  SpaceMono_XLARGE: calcFontCss({
    id: `SpaceMono`,
    leading: 32,
    size: typeScale.xl,
  }),
}
