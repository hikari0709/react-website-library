import { OrderedList } from '@/components/ui-components/OrderedList';

const OrderedListView = () => {
  return (
    <main>
      <h1>順番リスト（ol）</h1>
      <OrderedList
        listItems={[{ content: 'Item 1' }, { content: 'Item 2' }]} />
    </main>
  );
};

export default OrderedListView;
