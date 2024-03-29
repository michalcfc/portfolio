import React, { Children, useContext } from 'react';

import { TabsContext } from '~components/common/Tabs/Tabs';
import {
  TapPanelsWrapper,
} from './TabPanels.styles';

import {
  TabPanelsD,
} from './TabPanels.d';

const TabPanels: React.FC<TabPanelsD> = ({
  children,
}) => {
  const { selectedTab } = useContext(TabsContext);

  const child = Children.toArray(children);
  const childContent = child
    .find((child, index) => index === selectedTab);

  return (
    <TapPanelsWrapper>
      {childContent}
    </TapPanelsWrapper>
  );
};

export default TabPanels;
