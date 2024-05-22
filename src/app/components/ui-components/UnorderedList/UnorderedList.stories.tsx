import type { Meta, StoryObj } from '@storybook/react';
import { UnorderedList } from './UnorderedList';
import { ListItem } from '@/components/ListItem';

const meta = {
  title: 'Components/UnorderedList',
  component: UnorderedList,
  tags: ['autodocs'],
} satisfies Meta<typeof UnorderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UnorderedList>
      <ListItem>ListItem 1</ListItem>
      <ListItem>ListItem 2</ListItem>
      <ListItem>ListItem 3</ListItem>
      <ListItem>ListItem 4</ListItem>
      <ListItem>ListItem 5</ListItem>
    </UnorderedList>
  ),
};
