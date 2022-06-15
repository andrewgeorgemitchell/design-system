import { Meta, Story } from '@storybook/react'
import { Text as TextComp, TextProps } from './Text'

export default {
  title: 'Text',
  component: TextComp,
  argTypes: {},
} as Meta<typeof TextComp>

const TemplateText: Story<TextProps> = (args) => <TextComp {...args} />

export const Text = TemplateText.bind({})

Text.args = {
  variant: 'h1',
  children: 'Almost before we knew it, we had left the ground.',
}
