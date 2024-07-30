import { ReactNode } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { twJoin } from 'tailwind-merge';

type Props = {
  summary: string;
  children: ReactNode;
};

export const Accordion = ({ summary, children }: Props): JSX.Element => {
  return (
    <details
      className={twJoin(
        'border-solid border-t divide-gray-400 cursor-pointer',
        'hover:bg-gray-100',
        '[&_svg]:open:-rotate-180'
      )}
    >
      {/* safariでの表示確認をする */}
      <summary className="p-2 flex items-center justify-between">
        {summary}
        <MdKeyboardArrowDown
          size={24}
          className="transition-all duration-300"
        />
      </summary>
      <div className="p-2">
        <p>{children}</p>
      </div>
    </details>
  );
};
