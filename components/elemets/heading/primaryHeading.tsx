import { FC, ReactNode } from 'react';

type exclusionOptional = 'className' | 'style';
type Props = {
  name: string;
};

const Component:FC<Props> = ({ name }) => {
  return <p>{name}</p>;
};

export default Component;
