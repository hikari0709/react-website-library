// 入れ子できるようなアコーディオンは別のコンポーネントとして定義する
import { ReactNode } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

type Props = {
  summary: string;
  children: ReactNode;
};

const Accordion = (props: Props): JSX.Element => {
  return (
    <details>
      <summary className="block flex items-center">
        {props.summary}
        <ChevronDownIcon className="w-5 h-5 text-gray-500 ml-2 transition duration-300" />
      </summary>
      <div className="transition duration-300">{props.children}</div>
    </details>
  );
};

export default Accordion;
