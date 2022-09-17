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
      blue1: '#D3F6FF',
      blue2: '#A8E9FF',
      blue3: '#7CD7FF',
      blue4: '#5CC4FF',
      blue5: '#26A4FF',
      blue6: '#1B80DB',
      blue7: '#135FB7',
      blue8: '#0C4393',
      blue9: '#072F7A',
      success1: '#EAFCD4',
      success2: '#D0F9AB',
      success3: '#ABED7E',
      success4: '#86DB5B',
      success5: '#54C42B',
      success6: '#3AA81F',
      success7: '#258D15',
      success8: '#13710D',
      success9: '#085E09',
      info1: '#D3FFFC',
      info2: '#A8FDFF',
      info3: '#7CF3FF',
      info4: '#5CE4FF',
      info5: '#26CCFF',
      info6: '#1BA0DB',
      info7: '#1379B7',
      info8: '#0C5693',
      info9: '#073E7A',
      warning1: '#FEF9CF',
      warning2: '#FEF19F',
      warning3: '#FEE76F',
      warning4: '#FDDD4C',
      warning5: '#FCCD11',
      warning6: '#D8AB0C',
      warning7: '#B58B08',
      warning8: '#926D05',
      warning9: '#785703',
      danger1: '#FFE5D5',
      danger2: '#FFC4AC',
      danger3: '#FF9C82',
      danger4: '#FF7663',
      danger5: '#FF3730',
      danger6: '#DB232C',
      danger7: '#B7182D',
      danger8: '#930F2C',
      danger9: '#7A092B',
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
    fontSizes: {
      base: '16px',
      h1: '3rem',
      h2: '2.125rem',
      h3: '1.5rem',
      h4: '1.25rem',
      body: '1rem',
      subtitle: '1.25rem',
      button: '0.875rem',
      caption: '0.75rem',
    },
    fontWeights: {
      light: '300',
      normal: '400',
      bold: '600',
      bolder: '700',
      h1: '$bold',
      h2: '$bold',
      h3: '$bold',
      h4: '$bold',
      body: '$normal',
      subtitle: '$normal',
      button: '$normal',
      caption: '$light',
    },
    lineHeights: {
      base: '16px',
      h1: '3rem',
      h2: '2.125rem',
      h3: '1.5rem',
      h4: '1.25rem',
      body: '1rem',
      subtitle: '1.25rem',
      button: '0.875rem',
      caption: '0.75rem',
    },
    letterSpacings: {
      base: '16px',
      normal: '-0.016rem',
      h1: '-0.016rem',
      h2: '-0.016rem',
      h3: '-0.016rem',
      h4: '-0.016rem',
      body: '$normal',
      subtitle: '$normal',
      button: '$normal',
      caption: '$normal',
    },
    fontFamily: {
      base: 'Roboto',
      primary: 'Roboto',
      h1: '$primary',
      h2: '$primary',
      h3: '$primary',
      h4: '$primary',
      body: '$primary',
      subtitle: '$primary',
      button: '$primary',
      caption: '$primary',
    },
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
    textStyles: (variant: string) => ({
      fontSize: `$${variant}`,
      fontWeight: `$${variant}`,
      lineHeight: `$${variant}`,
      letterSpacing: `$${variant}`,
      fontFamily: `$${variant}`,
    }),
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
