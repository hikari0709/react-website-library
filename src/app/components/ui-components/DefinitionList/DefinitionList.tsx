'use client';
import ReactNode from 'react';

type Props = {
  listItem: {
    title: string;
    detail: string;
  };
};

export const DefinitionList = ({ listItem }: Props) => {
  return (
    <dl>
      <div>
        <dt>{listItem.title}</dt>
        <dd>{listItem.detail}</dd>
      </div>
    </dl>
  );
};
