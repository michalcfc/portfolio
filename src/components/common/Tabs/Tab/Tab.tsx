import React from 'react';

import {
    TabWrapper
} from "./Tab.styles";

import {
  TabD
} from './Tab.d';

// components
import { Button } from "~components/common/Button";

const Tab: React.FC<TabD> = ({
    title,
    onSelect,
    isSelected,
 }) => {

    return (
        <TabWrapper
            selectedTab={isSelected}
            onClick={onSelect}
        >
            <Button
                name={title}
                variant={'text'}
                onClick={onSelect}
            />
        </TabWrapper>
    )
}

export default Tab;
