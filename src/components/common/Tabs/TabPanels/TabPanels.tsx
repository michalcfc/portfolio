import React, {Fragment, useContext} from 'react';

import {
  TapPanelsWrapper
} from "./TabPanels.styles";

import {
    TabPanelsD
} from './TabPanels.d';


const TabPanels: React.FC<TabPanelsD> = ({
  children,
}) => {

    return (
      <TapPanelsWrapper>
          {React.Children
              .map(children, (child: React.ReactElement<TabPanelsD>, index) => (
                  <Fragment key={index}>
                      {React.cloneElement(
                          child,
                          {
                              id: index,
                          },
                      )}
                  </Fragment>
              ))}
      </TapPanelsWrapper>
    )
}

export default TabPanels;
