import type { Meta, StoryObj } from '@storybook/react'
import Alert from './Alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'error', 'success', 'warning'],
    },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'This is a success alert',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'This is a warning alert',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'This is an error alert',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'This is an info alert',
  },
}

export const WithIcon: Story = {
  args: {
    variant: 'info',
    children: 'This is an alert with an icon 🚀',
  },
}
