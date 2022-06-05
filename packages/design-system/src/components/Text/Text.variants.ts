import { type CSS } from '~/theme'
import { type NumericalSizingLiteral } from '~/types'

export enum TextVariantEnum {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  Body = 'body',
  Subtitle = 'subtitle',
  Caption = 'caption',
}

export type TextVariantLiteral = `${TextVariantEnum}`

export const TextVariant: Record<TextVariantLiteral, CSS> = {
  h1: {
    textStyles: 'h1',
  },
  h2: {
    textStyles: 'h2',
  },
  h3: {
    textStyles: 'h3',
  },
  h4: {
    textStyles: 'h4',
  },
  body: {
    textStyles: 'body',
  },
  subtitle: {
    textStyles: 'subtitle',
  },
  caption: {
    textStyles: 'caption',
  },
}

export const TextGutterBottomVariant: Record<NumericalSizingLiteral, CSS> = {
  1: {
    paddingBottom: '$1',
  },
  2: {
    paddingBottom: '$2',
  },
  3: {
    paddingBottom: '$3',
  },
  4: {
    paddingBottom: '$4',
  },
  5: {
    paddingBottom: '$5',
  },
  6: {
    paddingBottom: '$6',
  },
  7: {
    paddingBottom: '$7',
  },
  8: {
    paddingBottom: '$8',
  },
}
