import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export const { styled, css, getCssText, config } = createStitches({
  theme: {
    colors: {
      white: '#ffffff',
      gray1: '#fefefe',
      gray2: '#b7b7b7',
      gray3: '#959595',
      gray4: '#7f7f7f',
      gray5: '#6f6f6f',
      gray6: '#636363',
      gray7: '#595959',
      gray8: '#505050',
      gray9: '#494949',
      gray10: '#424242',
      gray11: '#3d3d3d',
      gray12: '#363636',
    },
    space: {
      base: '6px',
      1: '$base',
      2: 'calc($base * 2)',
      3: 'calc($base * 3)',
      4: 'calc($base * 4)',
      5: 'calc($base * 5)',
      6: 'calc($base * 6)',
      7: 'calc($base * 7)',
      8: 'calc($base * 8)',
    },
    sizes: {
      base: '6px',
      1: '$base',
      2: 'calc($base * 2)',
      3: 'calc($base * 3)',
      4: 'calc($base * 4)',
      5: 'calc($base * 5)',
      6: 'calc($base * 6)',
      7: 'calc($base * 7)',
      8: 'calc($base * 8)',
    },
    fonts: {},
    fontSizes: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {
      0: '0.0px 0.0px 0.0px hsl(0deg 0% 0% / 0.50)',
      1: '12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 100px 100px 80px rgba(0, 0, 0, 0.07)',
      2: '4.5px 4.5px 3.6px rgba(0, 0, 0, 0.024),12.5px 12.5px 10px rgba(0, 0, 0, 0.035),30.1px 30.1px 24.1px rgba(0, 0, 0, 0.046),100px 100px 80px rgba(0, 0, 0, 0.07)',
      4: '2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),12.5px 12.5px 10px rgba(0, 0, 0, 0.035),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),100px 100px 80px rgba(0, 0, 0, 0.07)',
    },
    zIndices: {
      1: '1',
      2: '10',
      3: '100',
      4: '1000',
      5: '10000',
    },
    transitions: {},
  },
  media: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)',
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
})

export type CSS = Stitches.CSS<typeof config>
