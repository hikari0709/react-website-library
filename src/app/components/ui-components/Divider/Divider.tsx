'use client';
import { FC } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const divider = tv({
  base: 'border-gray-400',
  variants: {
    horizontal: {
      true: 'border-l',
      false: 'border-t',
    },
    type: {
      solid: 'border-solid',
      dashed: 'border-dashed',
    },
  },
});

type DividerVariants = VariantProps<typeof divider>;

type Props = {
  horizontal?: boolean;
} & DividerVariants;

export const Divider: FC<Props> = ({ horizontal = false, type = 'solid' }) => {
  return <div className={divider({ horizontal, type })}></div>;
};
