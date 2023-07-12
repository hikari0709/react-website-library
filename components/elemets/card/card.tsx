/**
 * padding,radius,borderのサイズエレベーションを自由に調整できるようにする
 */
import { ReactNode } from 'react';

type Props = {
  headingText: string;
  children: ReactNode;
};

const Card = (props: Props): JSX.Element => {
  return (
    <div className="rounded border border-solid border-gray-300">
      <div>{props.headingText}</div>
      <div className="p-4">{props.children}</div>
    </div>
  );
};

export default Card;
