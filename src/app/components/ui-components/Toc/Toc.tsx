import { FC } from 'react';

type TocItem = {
  href: string;
  text: string;
};

type Toc = {
  tocItems: TocItem[];
};

export const Toc: FC<Toc> = ({ tocItems }) => {
  return (
    <section>
      <p>目次</p>
      <ul>
        {tocItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};
