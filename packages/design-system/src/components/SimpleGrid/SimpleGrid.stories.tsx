import { ComponentMeta } from '@storybook/react'

import { SimpleGrid as SimpleGridComp, SimpleGridProps } from './SimpleGrid'

export default {
  title: 'SimpleGrid',
  component: SimpleGridComp,
  argTypes: {},
} as ComponentMeta<typeof SimpleGridComp>

const TemplateSimpleGrid = (args: SimpleGridProps) => (
  <SimpleGridComp {...args} />
)
export const SimpleGrid = TemplateSimpleGrid.bind({})

SimpleGrid.args = {
  children: (
    <>
      <div style={{ background: 'lightgreen' }}>1</div>
      <div style={{ background: 'lightgreen' }}>2</div>
      <div style={{ background: 'lightgreen' }}>3</div>
      <div style={{ background: 'lightgreen' }}>4</div>
    </>
  ),
  gap: 4,
  sm: '1fr',
  md: 'repeat(2, 1fr)',
  lg: 'repeat(3, 1fr)',
  xl: 'repeat(4, 1fr)',
}
