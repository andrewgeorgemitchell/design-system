import { Meta, Story } from '@storybook/react'
import { Button } from '~/components'

import { Menu as MenuComp, MenuProps } from './Menu'

export default {
  title: 'Menu',
  component: MenuComp,
  argTypes: {},
} as Meta<typeof MenuComp>

const TemplateMenu: Story<MenuProps> = (args) => <MenuComp {...args} />
export const Menu = TemplateMenu.bind({})

Menu.args = {
  children: (
    <MenuComp>
      <MenuComp.Trigger>
        <Button>Hover Me</Button>
      </MenuComp.Trigger>
      <MenuComp.Content>Test Content</MenuComp.Content>
    </MenuComp>
  ),
}
