import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    breadcrumb: [
      { name: 'top', url: '/' },
      { name: 'second page', url: '/second-page' },
      { name: 'third page', url: '/third-page' },
    ],
  },
};
