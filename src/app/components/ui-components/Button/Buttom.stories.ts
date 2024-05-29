  import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

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

export const Default: Story = {
  args: {
    label: '無料',
    children:
      'HTMLをラップすることでButton要素の中を<br>自由にレイアウトするタイプのボタンです',
  },
};

export const NoFreeLabel: Story = {
  args: {
    type: 'secondary',
    children:
      'typePropsにsecondaryを指定することでbackground-color変更できます',
  },
};
