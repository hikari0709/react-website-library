import { FC } from 'react';
import { ChevronRightIcon } from '@untitled-theme/icons-react';

type Props = {
  breadcrumb: { name: string; url: string }[];
};

export const Breadcrumb: FC<Props> = ({ breadcrumb }) => {
  return (
    <nav aria-label="パンくずリスト">
      <ol className="flex gap-5">
        {breadcrumb.map((item, index) => (
          <li
            key={item.url}
            className="flex gap-1 items-center"
          >
            <a
              href={item.url}
              className="hover:underline"
            >
              {item.name}
            </a>
            {breadcrumb.length - 1 !== index && <ChevronRightIcon />}
          </li>
        ))}
      </ol>
    </nav>
  );
};
