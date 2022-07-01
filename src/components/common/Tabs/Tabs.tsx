import React, { useState } from 'react';

import { TabsD } from './Tabs.d';

import {
    TabIndex, TabPanel,
    TabsContextInterface,
} from "~components/common/Tabs/types";

export const TabsContext = React.createContext<TabsContextInterface>(null!)

const Tabs: React.FC<TabsD> = ({
    isActiveTab,
    children,
}) => {

    const [currentTab, setCurrentTab] = useState<TabIndex>(0);

    return (
      <TabsContext.Provider
        value={{
            currentTab,
            setCurrentTab,
        }}
      >
          {children}
      </TabsContext.Provider>
    );
    }

export default Tabs;
