import type { Meta, StoryObj } from '@storybook/react';
import Tab from './Tab';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: 'array',
      description: 'テキスト以外は入らない',
      defaultValue: ['tab1', 'tab2'],
    },
    children: { control: 'array' },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialActiveTab: 0,
    tabs: ['tab1', 'tab2'],
    children: [
      <div key="tab1">
        ここにtab1コンテンツ用の<span className="text-green-600">HTML</span>
        が入ります
      </div>,
      <div key="tab2">ここにtab2コンテンツ用のHTMLが入ります</div>,
    ],
  },
};

export const SelectedSecondaryTab: Story = {
  args: {
    initialActiveTab: 1,
    tabs: ['tab1', 'tab2'],
    children: [
      <div key="tab1">
        ここにtab1コンテンツ用の<span className="text-green-600">HTML</span>
        が入ります
      </div>,
      <div key="tab2">ここにtab2コンテンツ用のHTMLが入ります</div>,
    ],
  },
};
