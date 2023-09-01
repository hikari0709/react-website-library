import { ReactNode } from 'react';

type Props = {
  text: string;
  children?: ReactNode;
};

const secondaryHeading = ({ text, children }: Props) => {
  let returnHtml = (
    <h2 className="mb-6 text-xl font-bold border-l-4 border-red-600 border-solid py-3 pl-4">
      {text}
    </h2>
  );

  if (children) {
    returnHtml = (
      <hgroup className="mb-6">
        <h2 className="mb-1 text-xl font-bold border-l-4 border-red-600 border-solid py-3 pl-4">
          {text}
        </h2>
        {children}
      </hgroup>
    );
  }

  return returnHtml;
};

export default secondaryHeading;
