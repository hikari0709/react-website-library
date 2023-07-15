import React from 'react';
import { ReactNode } from 'react';

type Props = {
  headingText?: string;
  listItems: Array<string | ReactNode>;
};

const List = ({ headingText, listItems }: Props) => {
  return (
    <section>
      <p>{headingText}</p>
      <ul>
        {listItems.map((item, itemIndex) => (
          <li key={`item${itemIndex}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default List;
