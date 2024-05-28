import { Meta, StoryObj } from '@storybook/react';
import { OrderedList } from './OrderedList';

const meta = {
  title: 'Components/OrderedList',
  component: OrderedList,
} satisfies Meta<typeof OrderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    listItems: [
      { key: 'Item 1', content: 'Item 1' },
      { key: 'Item 2', content: 'Item 2' },
    ],
  },
};
