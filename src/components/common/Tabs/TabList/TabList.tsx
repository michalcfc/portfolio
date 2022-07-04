import React, {Children, cloneElement, ReactNode, useContext} from 'react';
import { TabsContext } from "@components/common/Tabs/Tabs";

import {
    TabListWrapper
} from "./TabList.styles";

import {
  TabListD
} from './TabList.d';

const TabList: React.FC<TabListD> = ({
    children
 }) => {

    const {selectedTab, setSelectedTab} = useContext(TabsContext)

    return (
    <TabListWrapper>
        {Children.map<ReactNode, ReactNode>(children, (child, index) => {

            if (React.isValidElement(child)) {
                return cloneElement(child, {
                    index: index,
                    isSelected: selectedTab === index,
                    onSelect: () => setSelectedTab(index)
                })
            }

        })}
    </TabListWrapper>
    )
}

export default TabList;
