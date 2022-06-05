import { type CSS, styled } from '~/theme'
import { type VariantProps, type As, NumericalSizingLiteral } from '~/types'

const StyledBase = styled('div', {
  display: 'flex',
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    justifyContent: {
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
      center: {
        justifyContent: 'center',
      },
      between: {
        justifyContent: 'space-between',
      },
      around: {
        justifyContent: 'space-around',
      },
    },
    alignItems: {
      start: {
        alignItems: 'flex-start',
      },
      end: {
        alignItems: 'flex-end',
      },
      center: {
        alignItems: 'center',
      },
      baseline: {
        alignItems: 'baseline',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
  },
})

type StyledBaseProps = VariantProps<typeof StyledBase>

export interface FlexProps {
  direction?: StyledBaseProps['direction']
  justifyContent?: StyledBaseProps['justifyContent']
  alignItems?: StyledBaseProps['alignItems']
  gap?: NumericalSizingLiteral
  css?: CSS
  as?: As
  children?: React.ReactNode
}

/**
 * Flex component is a wrapper for a div which give quick access to flex capabilities.
 *
 * ```tsx
 * <Flex justifyContent="center" alignItems="center" gap={2}>
 *  <Button>Save</Button>
 *  <Button>Cancel</Button>
 * </Flex>
 * ```
 *
 * @param {FlexProps} FlexProps
 * @returns {JSX.Element}
 */
export const Flex = ({
  direction,
  justifyContent,
  alignItems,
  gap,
  css,
  as,
  children,
}: FlexProps) => (
  <StyledBase
    direction={direction}
    justifyContent={justifyContent}
    alignItems={alignItems}
    css={{
      ...(gap && { gap: `$${gap}` }),
      ...css,
    }}
    as={as}
  >
    {children}
  </StyledBase>
)
