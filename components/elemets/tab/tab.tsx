import { FC, PropsWithChildren, useState } from 'react';

type Props = PropsWithChildren<{ title: string }>;

const Tab: FC<Props> = ({ title, children }) => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="w-2/4 flex gap-2">
        <button
          data-tab="tab1"
          onClick={() => handleClick('tab1')}
          className={`border border-t-4 border-b-0 rounded-t-sm flex-grow ${
            activeTab === 'tab1'
              ? 'border-brand-600 bg-white'
              : 'border-divider bg-gray-100'
          }`}
        >
          tab1
        </button>
        <button
          data-tab="tab2"
          onClick={() => handleClick('tab2')}
          className={`border border-t-4 border-b-0 rounded-t-sm flex-grow ${
            activeTab === 'tab2'
              ? 'border-brand-600 bg-white'
              : 'border-divider bg-gray-100'
          }`}
        >
          tab2
        </button>
      </div>
      <div className="w-2/4 border border-divider p-4 -mt-1px">
        {activeTab === 'tab1' && <div>Content for Tab 1</div>}
        {activeTab === 'tab2' && <div>Content for Tab 2</div>}
      </div>
    </div>
  );
};

export default Tab;
