import { ReactNode, ElementType } from 'react';

type Props = {
  level: string;
  children: ReactNode;
};

const Heading = ({ level, children }: Props) => {
  let HeadingTag = level as ElementType;
  let returnHtml = <HeadingTag>{children}</HeadingTag>;

  if (typeof children === 'object') {
    returnHtml = (
      <hgroup>
        <HeadingTag>{children}</HeadingTag>
      </hgroup>
    );
  }

  return returnHtml;
};

export default Heading;
