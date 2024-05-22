'use client';

import { FC, ComponentProps } from 'react';
import { twJoin } from 'tailwind-merge';

type Props = Omit<ComponentProps<'ul'>, 'role'>;

export const UnorderedList: FC<Props> = ({ children, className, ...atr }) => {
  return (
    <ul
      role="list"
      className={twJoin("list-disc flex flex-col gap-y-1", className)}
      {...atr}
    >
      {children}
    </ul>
  );
};
