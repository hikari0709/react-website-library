import { Meta, StoryObj } from '@storybook/react';
import { Quote } from './Quote';

const meta = {
  title: 'Components/Quote',
  component: Quote,
} satisfies Meta<typeof Quote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    quoteUrl: 'https://example.com',
    quoteText: 'example.com',
  },
  render: ({ quoteUrl, quoteText }) => (
    <Quote
      quoteUrl={quoteUrl}
      quoteText={quoteText}
    >
      <p>これは引用です。</p>
    </Quote>
  ),
};
