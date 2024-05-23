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
      dotted: 'border-dotted',
    },
    spacing: {
      1: 'mt-1',
      2: 'mt-2',
      4: 'mt-4',
      8: 'mt-8',
    },
  },
});

type DividerVariants = VariantProps<typeof divider>;

type Props = {
  horizontal?: boolean;
} & DividerVariants;

export const Divider: FC<Props> = ({
  horizontal = false,
  type = 'solid',
  spacing = 1,
}) => {
  return <div className={divider({ horizontal, type, spacing })}></div>;
};
