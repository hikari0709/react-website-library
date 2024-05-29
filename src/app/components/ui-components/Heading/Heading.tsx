'use client';
import { FC, HTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';

type Props = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
} & HTMLAttributes<HTMLElement>;

const style = tv({
  base: 'font-bold',
  variants: {
    heading: {
      h1: 'text-5xl',
      h2: 'text-4xl',
      h3: 'text-3xl',
      h4: 'text-2xl',
      h5: 'text-xl',
      h6: 'text-lg',
    },
  },
});

export const Heading: FC<Props> = ({ as: Tag, text, ...args }) => {
  return (
    <Tag
      className={style({ heading: Tag })}
      {...args}
    >
      {text}
    </Tag>
  );
};
