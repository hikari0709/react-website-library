'use client';
import { ReactNode } from 'react';

type Props = {
  headingText?: string;
  listItems: Array<string | ReactNode>;
};

export const OrderedList = ({ headingText, listItems }: Props) => {
  return (
    <section>
      <p>{headingText}</p>
      <ol>
        {listItems.map((item, itemIndex) => (
          <li key={`item${itemIndex}`}>{item}</li>
        ))}
      </ol>
    </section>
  );
};
