import { FC, ComponentProps, ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';
import { ListItem } from '@/components/ListItem';

type ListItemProps = {
  content: ReactNode;
};

type Props = {
  listItems: ListItemProps[];
} & Omit<ComponentProps<'ol'>, 'role' | 'class'>;

export const OrderedList: FC<Props> = ({ listItems, ...atr }) => {
  return (
    <ol
      role="list"
      className={twJoin('list-decimal flex flex-col gap-y-1')}
      {...atr}
    >
      {listItems.map((item, index) => (
        <ListItem key={index}>{item.content}</ListItem>
      ))}
    </ol>
  );
};
