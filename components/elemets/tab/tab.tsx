import React, { FC, PropsWithChildren, ReactNode, useState } from 'react';

type Props = {
  tabs: string[];
  children: PropsWithChildren<ReactNode>;
};

const Tab: FC<Props> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState('tab1');
  const childrenArray = React.Children.toArray(children);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="w-2/4 flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            data-tab={tab}
            onClick={() => handleClick(tab)}
            className={`border border-t-4 border-b-0 rounded-t-sm flex-grow ${
              activeTab === tab
                ? 'border-brand-600 bg-white'
                : 'border-divider bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-2/4 border border-divider p-4 -mt-1px">
        {activeTab === 'tab1' && childrenArray[0]}
        {activeTab === 'tab2' && childrenArray[1]}
      </div>
    </div>
  );
};

export default Tab;
