import { type As, type NumericalSizingLiteral } from '~/types'
import { type CSS, styled } from '~/theme'
import {
  ContainerMaxWidthVariant,
  ContainerSpacingVariant,
  type ContainerMaxWidthVariantLiteral,
} from './Container.variants'

const StyledBase = styled('div', {
  boxSizing: 'border-box',
  width: '100%',
  variants: {
    maxWidth: ContainerMaxWidthVariant,
    spacing: ContainerSpacingVariant,
  },
})

export interface ContainerProps {
  maxWidth?: ContainerMaxWidthVariantLiteral
  spacing?: NumericalSizingLiteral
  css?: CSS
  as?: As
  children?: React.ReactNode
}

export const Container = ({
  children,
  maxWidth,
  css,
  as,
  spacing,
  ...props
}: ContainerProps) => (
  <StyledBase
    maxWidth={maxWidth}
    as={as}
    spacing={spacing}
    css={css}
    {...props}
  >
    {children}
  </StyledBase>
)
