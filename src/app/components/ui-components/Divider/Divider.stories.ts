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
  args: {
    ...Default.args,
    horizontal: true,
  },
  render: (args) => <Divider {...args} />
};
