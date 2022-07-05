import React, { useMemo, useState } from 'react';

import { TabsD } from './Tabs.d';

import {
  TabIndex,
  TabsContextInterface,
} from '~components/common/Tabs/types';

export const TabsContext = React.createContext<TabsContextInterface>(null!);

const Tabs: React.FC<TabsD> = ({
  children,
}) => {
  const [selectedTab, setSelectedTab] = useState<TabIndex>(null);

  const value = useMemo(() => ({ selectedTab, setSelectedTab }), []);

  return (
    <TabsContext.Provider
      value={value}
    >
      {children}
    </TabsContext.Provider>
  );
};

export default Tabs;
