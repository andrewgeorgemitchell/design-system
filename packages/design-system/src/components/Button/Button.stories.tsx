import { Meta, Story } from '@storybook/react'

import { Button as ButtonComp, ButtonProps } from './Button'

export default {
  title: 'Button',
  component: ButtonComp,
  argTypes: {},
} as Meta<typeof ButtonComp>

const TemplateButton: Story<ButtonProps> = (args) => <ButtonComp {...args} />
export const Button = TemplateButton.bind({})

Button.args = {
  children: 'Test Button',
}
