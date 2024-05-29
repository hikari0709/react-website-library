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
    borderType: 'solid',
  },
};

export const Dashed: Story = {
  args: {
    horizontal: false,
    borderType: 'dashed',
  },
};

export const Horizontal: Story = {
  render: () => (
    <div className="flex">
      <div className="h-6"></div>
      <Divider horizontal />
      <div className="h-6"></div>
    </div>
  ),
};
