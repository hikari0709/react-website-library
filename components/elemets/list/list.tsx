import React from 'react';
import { ReactNode } from 'react';

type Props = {
  headingText?: string;
  listItems: Array<string | ReactNode>;
};

const List = (props: Props) => {
  return (
    <section>
      <p>{props.headingText}</p>
      <ul>
        {props.listItems.map((item, itemIndex) => (
          <li key={`item${itemIndex}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default List;
