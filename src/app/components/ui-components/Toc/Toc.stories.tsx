import { Meta, StoryObj } from '@storybook/react';
import { Toc } from './Toc';

const meta = {
  title: 'Components/Toc',
  component: Toc,
  tags: ['autodocs'],
} satisfies Meta<typeof Toc>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tocItems: [
      {
        href: '#1',
        text: 'Heading1',
      },
      {
        href: '#@',
        text: 'Heading2',
      },
    ],
  },
};
