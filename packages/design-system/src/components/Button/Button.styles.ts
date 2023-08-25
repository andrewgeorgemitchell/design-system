import type { CSS } from '~/types'

export const ButtonStyles: CSS = {
  background: '$white',
  borderRadius: '$2',
  border: 'none',
  paddingX: '$2',
  '&:focus-visible': {
    outline: 'solid 1px $blue4',
    outlineOffset: 1,
  },
}
