import List from '@/components/elemets/list/list';

const ListView = () => {
  return (
    <main>
      <h1>通常のリスト（ul）</h1>
      <List
        headingText="listのheadingテキスト"
        listItems={['apple', 'orange']}
      />
    </main>
  );
};

export default ListView;
