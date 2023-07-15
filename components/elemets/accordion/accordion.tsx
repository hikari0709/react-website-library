// 入れ子できるようなアコーディオンは別のコンポーネントとして定義する
import { ReactNode } from 'react';

type Props = {
  summary: string;
  children: ReactNode;
};

const Accordion = ({ summary, children }: Props): JSX.Element => {
  return (
    <details className="rounded">
      <summary className="p-2">{summary}</summary>
      <div className="p-2">{children}</div>
    </details>
  );
};

export default Accordion;
