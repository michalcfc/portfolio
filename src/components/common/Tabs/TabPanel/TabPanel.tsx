import React, { useContext } from 'react';

import {
  TapPanelWrapper
} from "./TabPanel.styles";

import {
  TabPanelD
} from './TabPanel.d';

import { TabsContext } from "~components/common/Tabs/Tabs";

const TabPanel: React.FC<TabPanelD> = ({
    id,
  children,
}) => {

    const { currentTab } = useContext(TabsContext)

    return (
      <TapPanelWrapper>
        {currentTab === id && children}
      </TapPanelWrapper>
    )
}

export default TabPanel;
