import { type ReactNode } from 'react'
import { styled } from '~/theme'
import { NumericalSizingLiteral } from '~/types'

const StyledBase = styled('div', {
  display: 'grid',
})

export interface SimpleGridProps {
  direction?: 'row' | 'column'
  sm: string
  md?: string
  lg?: string
  xl?: string
  gap?: NumericalSizingLiteral
  children: ReactNode
}

/**
 * SimpleGrid is a simple grid component that can be used to layout content in one dimension quickly.
 *
 * ```tsx
 * <SimpleGrid sm="1fr" md="repeat(2, 1fr)" lg="repeat(3, 1fr)" xl="repeat(4, 1fr)">
 *   <Box> Col 1 </Box>
 *   <Box> Col 2 </Box>
 *   <Box> Col 3 </Box>
 *   <Box> Col 4 </Box>
 * </SimpleGrid>
 * ```
 *
 * @param {SimpleGridProps} SimpleGridProps
 * @returns {JSX.Element} JSX.Element
 */
export const SimpleGrid = ({
  direction = 'row',
  sm,
  md = sm,
  lg = md || sm,
  xl = lg || md || sm,
  gap,
  children,
}: SimpleGridProps) => (
  <StyledBase
    css={{
      ...(direction === 'row' && {
        gridTemplateColumns: sm,
      }),
      ...(direction === 'column' && {
        gridTemplateRows: sm,
      }),
      '@md': {
        ...(direction === 'row' && {
          gridTemplateColumns: md,
        }),
        ...(direction === 'column' && {
          gridTemplateRows: md,
        }),
      },
      '@lg': {
        ...(direction === 'row' && {
          gridTemplateColumns: lg,
        }),
        ...(direction === 'column' && {
          gridTemplateRows: lg,
        }),
      },
      '@xl': {
        ...(direction === 'row' && {
          gridTemplateColumns: xl,
        }),
        ...(direction === 'column' && {
          gridTemplateRows: xl,
        }),
      },
      ...(gap && { gap: `$${gap}` }),
    }}
  >
    {children}
  </StyledBase>
)
