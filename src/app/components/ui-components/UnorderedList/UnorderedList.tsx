import { FC, ComponentProps, ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';
import { ListItem } from '@/components/ListItem';

type ListItemProps = {
  content: ReactNode;
};

type Props = {
  listItems: ListItemProps[];
} & Omit<ComponentProps<'ul'>, 'role' | 'class'>;

export const UnorderedList: FC<Props> = ({ listItems, ...atr }) => {
  return (
    <ul
      role="list"
      className={twJoin('list-disc flex flex-col gap-y-1')}
      {...atr}
    >
      {listItems.map((item, index) => (
        <ListItem key={index}>{item.content}</ListItem>
      ))}
    </ul>
  );
};
