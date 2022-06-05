import { type CSS } from '~/theme'

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
