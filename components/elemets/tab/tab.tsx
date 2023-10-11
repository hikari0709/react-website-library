import { ReactNode } from 'react';
import TabContainer from '@/components/elemets/tabContainer/tabContainer';

type Props = {
  tab: Array<string>;
  tabContainer: Array<ReactNode>;
};

const Tab = ({ tab, tabContainer }: Props) => {
  return (
    <section>
      <div>
        {tab.map((tabText, index) => (
          <p key={`tab-${index}`}>{tabText}</p>
        ))}
      </div>
      {tabContainer.map((content, index) => (
        <TabContainer key={`tabContent-${index}`}>
          <p>{content}</p>
        </TabContainer>
      ))}
    </section>
  );
};

export default Tab;
