import { ReactNode } from 'react';

type Props = {
  headingText?: string;
  listItems: Array<string | ReactNode>;
};

const OrderedList = (props: Props) => {
  return (
    <section>
      <p>{props.headingText}</p>
      <ol>
        {props.listItems.map((item, itemIndex) => (
          <li key={`item${itemIndex}`}>{item}</li>
        ))}
      </ol>
    </section>
  );
};

export default OrderedList;
