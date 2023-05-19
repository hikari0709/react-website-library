// 入れ子できるようなアコーディオンは別のコンポーネントとして定義する
import { ReactNode } from 'react';

type Props = {
  summary: string;
  children: ReactNode;
};

const Accordion = (props: Props): JSX.Element => {
  return (
    <details>
      <summary>{props.summary}</summary>
      {props.children}
    </details>
  );
};

export default Accordion;
