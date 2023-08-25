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
    lineHeight: 1.5,
    WebkitFontSmoothing: 'antialiased',
  },
  // Use a more-intuitive box-sizing model.
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  // Remove default margin
  '*': {
    margin: 0,
  },
  // Allow percentage-based heights in the application
  'html, body': {
    height: '100%',
  },
  // Improve media defaults
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },
  // Remove built-in form typography styles
  'input, button, textarea, select': {
    font: 'inherit',
  },
  // Avoid text overflows
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },
  // Create a root stacking context
  '#root, #__next': {
    isolation: 'isolate',
  },
})
