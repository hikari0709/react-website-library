import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
  render: () => (
    <section className="flex gap-2">
      {['りんご', 'みかん', 'バナナ', 'メロン', 'ぶどう'].map((item, index) => (
        <>
          <div
            key={index}
            className="h-6"
          >
            {item}
          </div>
          <Divider horizontal />
        </>
      ))}
    </section>
  ),
};
