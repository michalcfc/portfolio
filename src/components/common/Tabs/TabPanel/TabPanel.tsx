import React from 'react';

import {
  TapPanelWrapper
} from "./TabPanel.styles";

import {
  TabPanelD
} from './TabPanel.d';


const TabPanel: React.FC<TabPanelD> = ({
  children,
}) => (
      <TapPanelWrapper>
        {children}
      </TapPanelWrapper>
    )

export default TabPanel;
