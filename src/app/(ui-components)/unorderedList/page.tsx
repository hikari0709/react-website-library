import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { UnorderedList } from '@/components/ui-components/UnorderedList';

const ListView = () => {
  return (
    <section>
      <UnorderedList
        listItems={[{ content: 'Item 1' }, { content: 'Item 2' }]}
      />
    </section>
  );
};
export default ListView;
