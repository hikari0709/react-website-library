import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children:
      'HTMLをラップすることでButton要素の中を自由にレイアウトするタイプのボタンです',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children:
      'typePropsにsecondaryを指定することでbackground-color変更できます',
  },
};
