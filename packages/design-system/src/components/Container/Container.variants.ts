import { type CSS } from '~/theme'
import { type NumericalSizingLiteral } from '~/types'

export enum ContainerMaxWidthVariantEnum {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}

export type ContainerMaxWidthVariantLiteral = `${ContainerMaxWidthVariantEnum}`

export const ContainerMaxWidthVariant: Record<
  ContainerMaxWidthVariantLiteral,
  CSS
> = {
  sm: {
    maxWidth: 600,
    marginX: 'auto',
  },
  md: {
    maxWidth: 800,
    marginX: 'auto',
  },
  lg: {
    maxWidth: 1000,
    marginX: 'auto',
  },
  xl: {
    maxWidth: 1200,
    marginX: 'auto',
  },
}

export const ContainerSpacingVariant: Record<NumericalSizingLiteral, CSS> = {
  1: {
    padding: '$1',
  },
  2: {
    padding: '$2',
  },
  3: {
    padding: '$3',
  },
  4: {
    padding: '$4',
  },
  5: {
    padding: '$5',
  },
  6: {
    padding: '$6',
  },
  7: {
    padding: '$7',
  },
  8: {
    padding: '$8',
  },
}
