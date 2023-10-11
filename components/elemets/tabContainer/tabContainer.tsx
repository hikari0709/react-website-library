import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const TabContainer = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default TabContainer;
