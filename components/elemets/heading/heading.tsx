import { ReactNode, ElementType } from 'react';

type Props = {
  level: string;
  children: ReactNode;
};

const Heading = ({ level, children }: Props) => {
  let HeadingTag = level as ElementType;
  let element = <HeadingTag>{children}</HeadingTag>;

  if (typeof children === 'object') {
    console.log('objectだよ');
    element = (
      <hgroup>
        <HeadingTag>{children}</HeadingTag>
      </hgroup>
    );
  }

  return element;
};

export default Heading;
