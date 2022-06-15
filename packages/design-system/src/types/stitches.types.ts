import type * as Stitches from '@stitches/react'
import { config } from '~/theme'

export type NumericalSizingLiteral = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type IntrinsicElementsKeys = keyof JSX.IntrinsicElements

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type As = React.ElementType<any> | IntrinsicElementsKeys

export type VariantProps<T> = Stitches.VariantProps<T>

export type CSS = Stitches.CSS<typeof config>
