import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    horizontal: false,
    type: 'solid',
    spacing: 1,
  },
};

export const Dashed: Story = {
  args: {
    horizontal: false,
    type: 'dashed',
    spacing: 1,
  },
};

export const Dotted: Story = {
  args: {
    horizontal: false,
    type: 'dotted',
    spacing: 1,
  },
};
