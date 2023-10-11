import Tab from '@/components/elemets/tab/tab';

const TabView = () => {
  return (
    <main>
      <h1>タブ切り替えコンテンツ</h1>
      <Tab
        tab={['test1', 'test2']}
        tabContainer={['apple', 'orange']}
      />
    </main>
  );
};

export default TabView;
