import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    controls: { sort: 'alpha' },
  },
  tags: ['autodocs'],
  argTypes: {
    advanced: { control: 'boolean' },
    bgColor: {
      control: 'radio',
      options: ['bg-gray-100', 'bg-gray-200', 'bg-gray-300'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'cardにheadingを設定したいときに入力してください',
    children:
      'cardのコンテンツをここに入れます。HTMLなども入れることも自由に入れることができます',
  },
};
