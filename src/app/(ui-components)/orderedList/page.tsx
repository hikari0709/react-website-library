import { OrderedList } from '@/components/ui-components/OrderedList';

const OrderedListView = () => {
  return (
    <main>
      <h1>順番リスト（ol）</h1>
      <OrderedList
        headingText="順番リストのheadingテキスト"
        listItems={['apple', 'orange']}
      />
    </main>
  );
};

export default OrderedListView;
