import { Tab } from '@/components/ui-components/Tab';

const TabView = () => {
  return (
    <main>
      <h1>Tab</h1>
      <Tab tabs={['一つ目のタブ', '二つ目のタブ']}>
        <div>Content for Tab 1</div>
        <div>Content for Tab 2</div>
      </Tab>
    </main>
  );
};

export default TabView;
