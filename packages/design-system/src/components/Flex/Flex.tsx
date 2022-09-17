import { styled } from '~/theme'
import type { CSS, VariantProps, As, NumericalSizingLiteral } from '~/types'
import {
  FlexGapVariant,
  FlexDirectionVariant,
  FlexJustifyContentVariant,
  FlexAlignItemsVariant,
} from './Flex.variants'

const StyledBase = styled('div', {
  display: 'flex',
  variants: {
    direction: FlexDirectionVariant,
    justifyContent: FlexJustifyContentVariant,
    alignItems: FlexAlignItemsVariant,
    gap: FlexGapVariant,
  },
  defaultVariant: {
    direction: 'row',
    justifyContent: 's tart',
    alignItems: 'start',
    gap: null,
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
  ...props
}: FlexProps) => (
  <StyledBase
    direction={direction}
    justifyContent={justifyContent}
    alignItems={alignItems}
    gap={gap}
    css={css}
    as={as}
    {...props}
  >
    {children}
  </StyledBase>
)
