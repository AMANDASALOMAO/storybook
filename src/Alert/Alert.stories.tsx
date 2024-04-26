import type { Meta, StoryObj } from '@storybook/react'
import Alert from './Alert'

const meta = {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'This is a success alert'
  },
}
export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'This is a warning alert'
    },
  }

export const Error: Story = {
  args: {
    children: 'This is a error alert',
      variant: 'error'
  }
}

export const Info: Story = {
    args: {
        variant: 'info',
        children: 'This is a info alert'
    }
  }

export const WithIcon: Story = {
  args: {
    children: 'This is alert'
}
}
