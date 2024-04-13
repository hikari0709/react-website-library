import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialActive: false,
    summary: 'summaryが入ります',
    children: 'ここにコンテンツの内容が入ります',
  },
};

export const AccordionOpen: Story = {
  args: {
    initialActive: true,
    summary: 'summaryが入ります',
    children: 'ここにコンテンツの内容が入ります',
  },
};
