import { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';

const meta = {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://placehold.jp/1200x600.png',
    alt: 'サンプルのダミー画像',
    width: 1200,
    height: 600,
  },
};
