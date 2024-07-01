import { FC, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

type Props = PropsWithChildren<{
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'sm' | 'md' | 'lg';
}>;

const card = tv({
  base: 'rounded shadow w-full h-auto bg-white box-border',
  variants: {
    padding: {
      xs: 'p-1',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    },
    shadow: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    },
  },
});

export const Card: FC<Props> = ({
  children,
  padding = 'md',
  shadow = 'sm',
}) => {
  return <div className={card({ padding, shadow })}>{children}</div>;
};
