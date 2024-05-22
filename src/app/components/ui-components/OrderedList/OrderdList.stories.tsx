import { Meta, StoryObj } from '@storybook/react';
import { OrderedList } from './OrderedList';
import { ListItem } from '@/components/ListItem';

const meta = {
  title: 'Components/OrderedList',
  component: OrderedList,
} satisfies Meta<typeof OrderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <OrderedList>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </OrderedList>
  ),
};
