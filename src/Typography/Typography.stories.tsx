import type { Meta, StoryObj } from '@storybook/react'
import Typography from './Typography'

const meta = {
  title: 'Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {
    children: 'Typography'
  },
  argTypes: {
    children: {control: 'text'}
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Bold: Story = {
  args: {
    weight: 'bold'
  },
}
export const Medium: Story = {
    args: {
      weight: 'medium'
    },
  }
export const Light: Story = {
  args: {
    weight: 'light'
  },
}
export const Title1: Story = {
  args: {
      type: 'h1'
  }
}

export const Title2: Story = {
  args: {
      type: 'h2'
  }
}

export const Paragraph: Story = {
  args: {
      type: 'p'
  }
}