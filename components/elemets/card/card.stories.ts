import type { Meta, StoryObj } from '@storybook/react';
import Styled from './styledCard';
import VanillaExtract from './vanillaExtractCard';
import Tailwind from './tailwindCard';
import Modules from './modulesCard';

const meta = {
  title: 'Components/Card',
  component: Modules,
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

export const cardStyled: Story = {
  args: {
    title: 'cardにheadingを設定したいときに入力してください',
    children:
      'cardのコンテンツをここに入れます。HTMLなども入れることも自由に入れることができます',
  },
};

export const cardVanillaExtract: Story = {
  args: {
    title: 'cardにheadingを設定したいときに入力してください',
    children:
      'cardのコンテンツをここに入れます。HTMLなども入れることも自由に入れることができます',
  },
};
