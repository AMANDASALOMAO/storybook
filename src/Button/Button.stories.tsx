import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Click me',
    onClick: action('onClick')
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    color: { control: 'color' },
    variant: { control: 'select', options: ['flat, rounded, pill']},
    label: {control: 'text'}
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    type: 'secundary'
  },
};

export const Large: Story = {
  args: {
    size: 'large'
  },
};

export const Small: Story = {
  args: {
    size: 'small'
  },
};
export const Flat: Story = {
  args: {
      variant: 'flat'
  }
}

export const Pill: Story = {
  args: {
      variant: 'pill'
  }
}

export const Rounded: Story = {
  args: {
      variant: 'rounded'
  }
}