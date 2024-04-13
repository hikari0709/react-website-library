import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const meta = {
  title: 'Components/List',
  component: List,
  args: {
    as: 'ul',
    nested: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  }
};
