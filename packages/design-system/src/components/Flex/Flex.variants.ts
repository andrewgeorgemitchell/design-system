import { type CSS } from '~/theme'

export enum FlexDirectionVariantEnum {
  ROW = 'row',
  ROW_REVERSE = 'row-reverse',
  COLUMN = 'column',
  COLUMN_REVERSE = 'column-reverse',
}

export type FlexDirectionVariantLiteral = `${FlexDirectionVariantEnum}`

export const FlexDirectionVariant: Record<FlexDirectionVariantLiteral, CSS> = {
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
}

export enum FlexJustifyContentVariantEnum {
  START = 'start',
  END = 'end',
  CENTER = 'center',
  SPACE_BETWEEN = 'between',
  SPACE_AROUND = 'around',
}

export type FlexJustifyContentVariantLiteral =
  `${FlexJustifyContentVariantEnum}`

export const FlexJustifyContentVariant: Record<
  FlexJustifyContentVariantLiteral,
  CSS
> = {
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
}

export enum FlexAlignItemsVariantEnum {
  START = 'start',
  END = 'end',
  CENTER = 'center',
  BASELINE = 'baseline',
  STRETCH = 'stretch',
}

export type FlexAlignItemsVariantLiteral = `${FlexAlignItemsVariantEnum}`

export const FlexAlignItemsVariant: Record<FlexAlignItemsVariantLiteral, CSS> =
  {
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
  }

export const FlexGapVariant: Record<NumericVariantLiteral, CSS> = {
  1: {
    gap: '$1',
  },
  2: {
    gap: '$2',
  },
  3: {
    gap: '$3',
  },
  4: {
    gap: '$4',
  },
  5: {
    gap: '$5',
  },
  6: {
    gap: '$6',
  },
  7: {
    gap: '$7',
  },
  8: {
    gap: '$8',
  },
}
