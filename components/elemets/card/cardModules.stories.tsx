import type { Meta, StoryObj } from '@storybook/react';
import Card from './modulesCard';

const meta = {
  title: 'Components/Card/CardModules',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'label' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const card: Story = {
  args: {
    title: 'cardにheadingを設定したいときに入力してください',
    children:
      'cardのコンテンツをここに入れます。HTMLなども入れることも自由に入れることができます',
  },
};
