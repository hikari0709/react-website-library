'use client';
// 入れ子できるようなアコーディオンは別のコンポーネントとして定義する
import { ReactNode, useState } from 'react';

type Props = {
  initialActive?: boolean;
  summary: string;
  children: ReactNode;
};

export const Accordion = ({
  initialActive = false,
  summary,
  children,
}: Props): JSX.Element => {
  const [accordionActive, setAccordionActive] = useState(initialActive);
  return (
    <details
      className="rounded"
      open={accordionActive}
    >
      <summary className="p-2">{summary}</summary>
      <div className="p-2">{children}</div>
    </details>
  );
};
