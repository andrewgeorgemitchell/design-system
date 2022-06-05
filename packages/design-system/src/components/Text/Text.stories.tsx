import { ComponentMeta } from '@storybook/react'
import { Text as TextComp, TextProps } from './Text'

export default {
  title: 'Text',
  component: TextComp,
  argTypes: {},
} as ComponentMeta<typeof TextComp>

const TemplateText = (args: TextProps) => <TextComp {...args} />

export const Text = TemplateText.bind({})

Text.args = {
  variant: 'h1',
  children: 'Almost before we knew it, we had left the ground.',
}
