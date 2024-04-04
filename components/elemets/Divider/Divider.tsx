import { FC } from 'react';

type Props = {
  type: string;
  spacing: string;
};

const Divider: FC<Props> = ({ type, spacing }) => {
  return <div className="border-t border-black"></div>;
};

export default Divider;
