'use client';

import { FC, ReactNode, ComponentPropsWithoutRef } from 'react';
import { tv } from 'tailwind-variants';

type Props = {
  as?: 'ul' | 'ol';
  nested?: boolean;
  className?: string;
};

const list = tv({
  base: 'ml-7',
  variants: {
    nested: {
      true: 'text-red-700',
    },
  },
  compoundVariants: [
    {
      nested: true,
      class: 'ml-5',
    },
  ],
});

export const List = ({ as: Tag = 'ul', nested, className }: Props) => {
  return (
    <Tag className={className}>
      <li>list1</li>
      <li>list2</li>
    </Tag>
  );
};

type PropsText = {
  children: ReactNode;
};
