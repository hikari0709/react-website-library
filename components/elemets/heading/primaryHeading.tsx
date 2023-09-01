import { ReactNode } from 'react';

type Props = {
  text: string;
  children?: ReactNode;
};

const primaryHeading = ({ text, children }: Props) => {
  let returnHtml = <h1 className="mb-6 text-2xl">{text}</h1>;

  if (children) {
    returnHtml = (
      <hgroup className="mb-6">
        <h1 className="mb-1 text-2xl">{text}</h1>
        {children}
      </hgroup>
    );
  }

  return returnHtml;
};

export default primaryHeading;
