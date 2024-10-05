"use client";
import React, {
  type FC,
  type PropsWithChildren,
  type ReactNode,
  useState,
} from "react";

type Props = {
  initialActiveTab?: number;
  tabs: string[];
  children: PropsWithChildren<ReactNode>;
};

export const Tab: FC<Props> = ({ initialActiveTab = 0, tabs, children }) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const childrenArray = React.Children.toArray(children);

  const handleClick = (tab: number) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="w-2/4 flex gap-2">
        {tabs.map((tab, index) => (
          <button
            key={`tab-${index}`}
            data-tab={index}
            onClick={() => handleClick(index)}
            className={`border border-t-4 border-b-0 rounded-t-sm p-1 flex-grow ${
              activeTab === index
                ? "border-brand-600 bg-white"
                : "border-divider bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-2/4 border border-divider p-4 -mt-1px">
        {childrenArray[activeTab]}
      </div>
    </div>
  );
};
