import { styled, type CSS } from '~/theme'
import { type As, type NumericalSizingLiteral } from '~/types'
import {
  TextVariant,
  type TextVariantLiteral,
  TextGutterBottomVariant,
} from './Text.variants'

const StyledBase = styled('p', {
  color: '$gray12',
  fontFamily: '$fontFamily',
  variants: {
    variant: TextVariant,
    gutterBottom: TextGutterBottomVariant,
  },
  defaultVariants: {
    variant: 'h1',
  },
})

export interface TextProps {
  variant?: TextVariantLiteral
  gutterBottom?: NumericalSizingLiteral
  css?: CSS
  children?: React.ReactNode
  as?: As
}

/**
 * Text component with default props and no children text content to show how it looks.
 *
 * ```tsx
 * <Text variant="h1">
 *    Fillter Text Component
 * </Text>
 * ```
 *
 * @param {TextProps} TextProps
 * @returns {JSX.Element}
 */
export const Text = ({
  variant,
  gutterBottom,
  children,
  css,
  as,
  ...props
}: TextProps) => (
  <StyledBase
    variant={variant}
    gutterBottom={gutterBottom}
    css={css}
    as={as}
    {...props}
  >
    {children}
  </StyledBase>
)
