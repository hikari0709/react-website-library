import { FC, PropsWithChildren } from 'react';

type Props = {
  quoteUrl: string;
  quoteText: string;
};

export const Quote: FC<PropsWithChildren<Props>> = ({
  children,
  quoteUrl,
  quoteText,
}) => {
  return (
    <blockquote
      className="text-base border-l-[3px] border-gray-300 p-4 shadow-sm"
      cite={quoteUrl}
    >
      {children}
      <footer className="text-sm">
        引用：
        <a
          href={quoteUrl}
          className="text-blue-500"
        >
          {quoteText}
        </a>
      </footer>
    </blockquote>
  );
};
