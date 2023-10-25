import type { Meta, StoryObj } from '@storybook/react';
import Tab from './tab';

const meta = {
  title: 'Components/Card',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'array' },
    children: { control: 'array' },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const tab: Story = {
  args: {
    tabs: ['tab1', 'tab2'],
    children: [
      `ここにtab1コンテンツ用のテキストが入ります`,
      `ここにtab2コンテンツ用のテキストが入ります`,
    ],
  },
};
