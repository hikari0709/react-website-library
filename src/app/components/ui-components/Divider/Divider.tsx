'use client';
import { FC } from 'react';
import { tv } from 'tailwind-variants';

type Props = {
  type: string;
  spacing: string;
};

export const Divider: FC<Props> = ({ type, spacing }) => {
  return <div className="border-t border-black"></div>;
};
