import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    controls: { sort: 'alpha' },
  },
  argTypes: {
    padding: {
      control: 'radio',
      options: [1, 2, 4, 6, 8],
    },
    shadow: {
      control: 'radio',
      options: ['sm', 'default', 'md', 'lg'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Card content' },
};
