'use client';
import { FC, ComponentProps, PropsWithChildren } from 'react';
import { twJoin } from 'tailwind-merge';

type Props = Omit<ComponentProps<'ol'>, 'role'>;

export const OrderedList: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...atr
}) => {
  return (
    <ol
      role="list"
      className={twJoin('list-decimal flex flex-col gap-y-1', className)}
      {...atr}
    >
      {children}
    </ol>
  );
};
