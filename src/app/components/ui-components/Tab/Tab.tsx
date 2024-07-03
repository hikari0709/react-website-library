import React, { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { tv } from 'tailwind-variants';

type Props = {
  initialActiveTab?: number;
  tabs: string[];
  children: PropsWithChildren<ReactNode>;
};

const tabBar = tv({
  slots: {
    base: 'border border-t-4 border-b-0 first-of-type:border-r-0 rounded-t-sm p-1 flex-grow',
    tabPanel: 'border border-divider p-4 -mt-1px',
  },
  variants: {
    active: {
      true: 'border-brand-600 bg-white',
      false: 'border-divider bg-gray-100',
    },
  },
});

export const Tab: FC<Props> = ({ initialActiveTab = 0, tabs, children }) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const childrenArray = React.Children.toArray(children);

  const handleClick = (tab: number) => {
    setActiveTab(tab);
  };

  const { base, tabPanel } = tabBar({ active: activeTab === initialActiveTab });
  return (
    <>
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={`tab-${index}`}
            data-tab={index}
            onClick={() => handleClick(index)}
            className={base({ active: activeTab === index })}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={tabPanel()}>{childrenArray[activeTab]}</div>
    </>
  );
};
