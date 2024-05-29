import type { Meta, StoryObj } from '@storybook/react';
import { UnorderedList } from './UnorderedList';

const meta = {
  title: 'Components/UnorderedList',
  component: UnorderedList,
  tags: ['autodocs'],
} satisfies Meta<typeof UnorderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    listItems: [{ content: 'Item 1' }, { content: 'Item 2' }],
  },
};
