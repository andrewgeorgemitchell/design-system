import { ComponentMeta } from '@storybook/react'

import { Flex as FlexComp, FlexProps } from './Flex'

export default {
  title: 'Flex',
  component: FlexComp,
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['row', 'column'],
      },
    },
    justifyContent: {
      control: {
        type: 'select',
        options: ['start', 'end', 'center', 'between', 'around'],
      },
    },
    alignItems: {
      control: {
        type: 'select',
        options: ['start', 'end', 'center', 'baseline', 'stretch'],
      },
    },
  },
} as ComponentMeta<typeof FlexComp>

const TemplateFlex = (args: FlexProps) => <FlexComp {...args} />
export const Flex = TemplateFlex.bind({})

Flex.args = {
  children: (
    <>
      <div style={{ background: 'lightgreen' }}>1</div>
      <div style={{ background: 'lightgreen' }}>1</div>
      <div style={{ background: 'lightgreen' }}>1</div>
      <div style={{ background: 'lightgreen' }}>1</div>
      <div style={{ background: 'lightgreen' }}>1</div>
      <div style={{ background: 'lightgreen' }}>1</div>
      <div style={{ background: 'lightgreen' }}>1</div>
      <div style={{ background: 'lightgreen' }}>1</div>
      <div style={{ background: 'lightgreen' }}>1</div>
      <div style={{ background: 'lightgreen' }}>1</div>
      <div style={{ background: 'lightgreen' }}>1</div>
      <div style={{ background: 'lightgreen' }}>1</div>
    </>
  ),
  gap: 2,
  justifyContent: 'between',
  css: {
    padding: '$3',
    background: 'lightblue',
  },
}
