import type { Meta, StoryObj } from '@storybook/react';
import Card from '@/components/elemets/card/card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    headingText: { control: 'label' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    headingText: 'cardにheadingを設定したいときに入力してください',
    children: `<main>
      <h1>Card</h1>
      <Card headingText={'cardにheadingを設定したいときに入力してください'}>
        <p>cardのコンテンツをここに入れます</p>
        <div>HTMLなども入れることも自由に入れることができます。</div>
      </Card>
    </main>`,
  },
};
