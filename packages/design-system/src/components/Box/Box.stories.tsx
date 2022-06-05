import { ComponentMeta } from '@storybook/react'

import { Box as BoxComp, BoxProps } from './Box'

export default {
  title: 'Box',
  component: BoxComp,
  argTypes: {},
} as ComponentMeta<typeof BoxComp>

const TemplateBox = (args: BoxProps) => <BoxComp {...args} />
export const Box = TemplateBox.bind({})

Box.args = {
  children: 'Box Comp Test Content',
  css: {
    width: 400,
    padding: '$5',
    border: '1px solid $gray7',
  },
}
