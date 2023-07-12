// 入れ子できるようなアコーディオンは別のコンポーネントとして定義する
import { ReactNode } from 'react';

type Props = {
  summary: string;
  children: ReactNode;
};

const Accordion = (props: Props): JSX.Element => {
  return (
    <details className="rounded">
      <summary className="p-2">{props.summary}</summary>
      <div className="p-2">{props.children}</div>
    </details>
  );
};

export default Accordion;
