import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centerd',
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const accordion: Story = {
  args: {
    initialActive: false,
    summary: 'summaryが入ります',
    children: 'ここにコンテンツの内容が入ります',
  },
};

export const accordionOpen: Story = {
  args: {
    initialActive: true,
    summary: 'summaryが入ります',
    children: 'ここにコンテンツの内容が入ります',
  },
};
