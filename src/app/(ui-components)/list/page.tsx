import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { UnorderedList } from '@/src/app/components/ui-components/UnorderedList';
import { ListItem } from '@/components/ListItem';

const ListView = () => {
  return (
    <section>
      <UnorderedList>
        <ListItem>ListItem 1</ListItem>
        <ListItem>ListItem 2</ListItem>
        <ListItem>ListItem 3</ListItem>
        <ListItem>ListItem 4</ListItem>
        <ListItem>ListItem 5</ListItem>
      </UnorderedList>
    </section>
  );
};
export default ListView;
