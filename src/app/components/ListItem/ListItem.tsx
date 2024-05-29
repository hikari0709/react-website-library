import { FC, ComponentProps } from 'react';

type Props = JSX.IntrinsicElements['li'] & ComponentProps<'li'>;

export const ListItem: FC<Props> = ({ children }) => {
  return <li>{children}</li>;
};
