import type { Meta, StoryObj } from '@storybook/react';
import Tab from './tab';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tab: { control: 'label' },
    tabContainer: { control: 'text' },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const tab: Story = {
  args: {
    tab: ['test1', 'test2'],
    tabContainer: ['<p>test1 container</p>', '<p>test2 container</p>'],
  },
};
