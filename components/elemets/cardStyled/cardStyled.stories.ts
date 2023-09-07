import type { Meta, StoryObj } from '@storybook/react';
import Styled from './cardStyled';

const meta = {
  title: 'Components/Card',
  component: Styled,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'label' },
  },
} satisfies Meta<typeof Styled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'cardにheadingを設定したいときに入力してください',
    children: `
        <p>cardのコンテンツをここに入れます</p>
        <div>HTMLなども入れることも自由に入れることができます。</div>`,
  },
};
