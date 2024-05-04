import react from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingLevel1: Story = {
  args: {
    as: 'h1',
    text: 'Heading Level 1',
  },
};

export const HeadingLevel2: Story = {
  args: {
    as: 'h2',
    text: 'Heading Level 2',
  },
};

export const HeadingLevel3: Story = {
  args: {
    as: 'h3',
    text: 'Heading Level 3',
  },
};

export const HeadingLevel4: Story = {
  args: {
    as: 'h4',
    text: 'Heading Level 4',
  },
};

export const HeadingLevel5: Story = {
  args: {
    as: 'h5',
    text: 'Heading Level 5',
  },
};

export const HeadingLevel6: Story = {
  args: {
    as: 'h6',
    text: 'Heading Level 6',
  },
};
