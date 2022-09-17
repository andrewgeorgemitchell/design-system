import * as HoverCard from '@radix-ui/react-hover-card'
import { styled } from '~/theme'

export interface MenuProps {
  children: React.ReactNode
}

export const Menu = ({ children }: MenuProps) => (
  <HoverCard.Root openDelay={100}>{children}</HoverCard.Root>
)

export interface MenuTriggerProps {
  children: React.ReactNode
}

const MenuTrigger = ({ children }: MenuTriggerProps) => (
  <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
)

Menu.Trigger = MenuTrigger

export interface MenuContentProps {
  children: React.ReactNode
}

const ContentStyledBase = styled(HoverCard.Content, {
  backgroundColor: '#fff',
  border: '1px solid #ccc',
})

const MenuContent = ({ children }: MenuContentProps) => (
  <ContentStyledBase>
    <HoverCard.Arrow />
    {children}
  </ContentStyledBase>
)

Menu.Content = MenuContent
