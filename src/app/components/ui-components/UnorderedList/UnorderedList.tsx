'use client';

import { FC, ComponentProps } from 'react';

type Props = ComponentProps<'ul'>;

export const UnorderedList: FC<Props> = ({ children }) => {
  return (
    <ul
      role="list"
      className="list-disc flex flex-col gap-y-1"
    >
      {children}
    </ul>
  );
};
