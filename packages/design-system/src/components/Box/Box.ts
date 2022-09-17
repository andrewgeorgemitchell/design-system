import { styled } from '~/theme'
import type { As, CSS } from '~/types'

export interface BoxProps {
  as?: As
  css?: CSS
  children?: React.ReactNode
}

/**
 * Box component is a wrapper for a div which gives access to "as" and "css" props.
 *
 * ```tsx
 * <Box as="nav" css={{ background: '$gray12' }}>
 *  Navbar content goes here
 * </Box>
 * ```
 *
 * @param {BoxProps} BoxProps
 * @returns {JSX.Element}
 */
export const Box = styled('div', {})
