import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    src: 'url("https://cdn.jsdelivr.net/npm/roboto-regular-woff@0.7.1/Roboto-Regular.woff") format("woff")',
  },
  html: {
    fontSize: '16px',
  },
  body: {
    boxSizing: 'border-box',
    fontFamily: 'Roboto',
  },
  h1: {
    margin: 0,
  },
  h2: {
    margin: 0,
  },
  h3: {
    margin: 0,
  },
  h4: {
    margin: 0,
  },
  p: {
    margin: 0,
  },
})
