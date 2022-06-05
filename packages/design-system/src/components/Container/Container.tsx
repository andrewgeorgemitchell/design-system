import { ReactNode } from 'react'
import { styled } from '~/theme'

const StyledBase = styled('div', {})

export interface ContainerProps {
  children?: ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <StyledBase>{children}</StyledBase>
)
