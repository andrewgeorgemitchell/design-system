import { Meta, Story } from '@storybook/react'
import { SimpleGrid } from '~/components'

import { Container as ContainerComp, ContainerProps } from './Container'

export default {
  title: 'Container',
  component: ContainerComp,
  argTypes: {},
} as Meta<typeof ContainerComp>

const TemplateContainer: Story<ContainerProps> = (args) => (
  <ContainerComp {...args} />
)
export const Container = TemplateContainer.bind({})

Container.args = {
  children: (
    <SimpleGrid
      gap={4}
      sm="1fr"
      md="repeat(2, 1fr)"
      lg="repeat(3, 1fr)"
      xl="repeat(4, 1fr)"
    >
      <div style={{ background: 'lightgreen' }}>1</div>
      <div style={{ background: 'lightgreen' }}>2</div>
      <div style={{ background: 'lightgreen' }}>3</div>
      <div style={{ background: 'lightgreen' }}>4</div>
    </SimpleGrid>
  ),
  spacing: 4,
  maxWidth: 'sm',
}
