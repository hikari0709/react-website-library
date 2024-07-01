import { FC, PropsWithChildren } from 'react';

type Props = {
  quoteUrl: string;
  quoteTitle: string;
};

export const Quote: FC<PropsWithChildren<Props>> = ({
  children,
  quoteUrl,
  quoteTitle,
}) => {
  return (
    <blockquote
      className="text-base border-l-[3px] border-gray-300 p-4 shadow-sm"
      cite={quoteUrl}
    >
      {children}
      <footer className="text-sm">
        引用：
        <cite className="not-italic">
          <a
            href={quoteUrl}
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {quoteTitle}
          </a>
        </cite>
      </footer>
    </blockquote>
  );
};
