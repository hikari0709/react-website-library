import { ReactNode, ElementType } from 'react';

type Props = {
  level: number;
  text: string;
  children?: ReactNode;
};

const Heading = ({ level, text, children }: Props) => {
  let HeadingTag = `h${level}` as ElementType;
  let returnHtml = <HeadingTag>{text}</HeadingTag>;

  if (children) {
    returnHtml = (
      <hgroup>
        <HeadingTag>{text}</HeadingTag>
        {children}
      </hgroup>
    );
  }

  return returnHtml;
};

export default Heading;
