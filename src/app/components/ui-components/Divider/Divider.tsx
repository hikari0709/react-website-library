import { FC } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const divider = tv({
  base: 'border-gray-400',
  variants: {
    horizontal: {
      true: 'border-l',
      false: 'border-t',
    },
    borderType: {
      solid: 'border-solid',
      dashed: 'border-dashed',
    },
  },
});

type DividerVariants = Required<VariantProps<typeof divider>>;

type Props = {
  horizontal?: boolean;
  borderType?: DividerVariants['borderType'];
};

export const Divider: FC<Props> = ({
  horizontal = false,
  borderType = 'solid',
}) => {
  return <div className={divider({ horizontal, borderType })}></div>;
};
