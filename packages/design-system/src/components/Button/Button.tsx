import { IntrinsicElement } from '@stitches/react/types/styled-component'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { styled } from '~/theme'
import { ButtonStyles } from './Button.styles'

const StyledButtonBase = styled('button', {
  ...ButtonStyles,
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledButtonBase ref={forwardedRef} {...props}>
      {children}
    </StyledButtonBase>
  )
)

Button.displayName = 'Button'
