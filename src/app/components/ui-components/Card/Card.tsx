import { FC, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

type Props = PropsWithChildren<{
  padding?: 1 | 2 | 4 | 6 | 8;
  shadow?: 'sm' | 'md' | 'lg';
}>;

const card = tv({
  base: 'rounded shadow',
  variants: {
    padding: {
      1: 'p-1',
      2: 'p-2',
      4: 'p-4',
      6: 'p-6',
      8: 'p-8',
    },
    shadow: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    },
  },
});

export const Card: FC<Props> = ({ children, padding = 4, shadow }) => {
  return (
    <div className={card({ padding, shadow })}>
      <div className="w-full h-auto bg-white box-border">{children}</div>
    </div>
  );
};
