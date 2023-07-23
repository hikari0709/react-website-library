/**
 * padding,radius,borderのサイズエレベーションを自由に調整できるようにする
 */
import { ReactNode } from 'react';

type Props = {
  headingText: string;
  children: ReactNode;
};

const Card = ({ headingText, children }: Props) => {
  return (
    <div className="rounded border border-solid border-gray-300">
      <div>{headingText}</div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Card;
