import type { Meta, StoryObj } from '@storybook/react'
import Divider from './Divider'

const meta = {
  title: 'Divider',
  component: Divider,
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
  },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal'
  },
}
export const Vertical: Story = {
    args: {
        orientation: 'vertical'
    },
  }

export const WithChildren: Story = {
  args: {
      children: 'CENTER',
      type: 'center'
  }
}

export const WithChildrenLeft: Story = {
  args: {
      type: 'left',
      children: 'LEFT'
  }
}

export const WithChildrenRight: Story = {
  args: {
      type: 'right',
      children: 'RIGHT'
  }
}