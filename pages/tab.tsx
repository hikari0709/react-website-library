import Tab from '@/components/elemets/tab/tab';

const TabView = () => {
  return (
    <main>
      <h1>Tab</h1>
      <Tab tabs={['tab1', 'tab2']}>
        <div>Content for Tab 1</div>
        <div>Content for Tab 2</div>
      </Tab>
    </main>
  );
};

export default TabView;
