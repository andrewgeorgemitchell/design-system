import { forwardRef, useImperativeHandle, useRef } from 'react'
import { styled } from '~/theme'
import { ButtonStyles } from './Button.styles'

const StyledButtonBase = styled('button', {
  ...ButtonStyles,
})

export interface ButtonProps {
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement | null, ButtonProps>(
  (props, forwardedRef) => (
    <StyledButtonBase {...props}>{children}</StyledButtonBase>
  )
)
