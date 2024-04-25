'use client';
import { FC, PropsWithChildren, ComponentProps } from 'react';
import { tv } from 'tailwind-variants';

type Props = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & ComponentProps<'h1'>;

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

export const Heading: FC<PropsWithChildren<Props>> = ({
  children,
  as: Tag,
}) => {
  return <Tag className={style({ heading: Tag })}>{children}</Tag>;
};
