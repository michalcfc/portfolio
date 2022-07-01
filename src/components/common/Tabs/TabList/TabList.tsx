import React, {Fragment, useContext, useEffect} from 'react';

import {
    TabListWrapper
} from "./TabList.styles";

import {
  TabListD
} from './TabList.d';
import {TabsContext} from "~components/Tabs/Tabs";
import {AccordionChildrenProps} from "~components/Accordion/AccordionItem/AccordionItem.d";

const TabList: React.FC<TabListD> = ({
    children
 }) => {

  return (
      <TabListWrapper>
          {React.Children
              .map(children, (child: React.ReactElement<TabListD>, index) => (
                  <Fragment key={index}>
                      {React.cloneElement(
                          child,
                          {
                              id: index,
                          },
                      )}
                  </Fragment>
              ))}
      </TabListWrapper>
  )
}

export default TabList;
