import React, { useContext } from 'react';

import {
    TabWrapper
} from "./Tab.styles";

import {
  TabD
} from './Tab.d';

// components
import { Button } from "~components/common/Button";
import { TabsContext } from "~components/common/Tabs/Tabs";

const Tab: React.FC<TabD> = ({
    id,
    title,
 }) => {

    const { currentTab, setCurrentTab } = useContext(TabsContext)

    return (
        <TabWrapper
            selectedTab={currentTab === id}
            onClick={() => setCurrentTab(id)}
        >
            <Button
                name={title}
                variant={'ghost'}
                onClick={() => setCurrentTab(id)}
            />
        </TabWrapper>
    )
}

export default Tab;
