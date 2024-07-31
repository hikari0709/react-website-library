import type { Meta, StoryObj } from '@storybook/react';
import { Toc } from './Toc';

const meta = {
  title: 'Components/Toc',
  component: Toc,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toc>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
