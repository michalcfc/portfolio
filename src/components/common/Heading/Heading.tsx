import React from 'react';

import { Text } from '~components/common/Text';
import { HeadingProps } from './Heading.d';
import { HeadingType } from '~utils/styles/types';
import { HEADINGS_STYLES_DESKTOP, HEADINGS_STYLES_MOBILE } from '~utils/styles/headings';

interface Props {
  type: HeadingType;
  disableMobileStyles?: boolean;
}

const Heading: React.FC<Props & HeadingProps<HeadingType>> = ({
  title,
  children,
  type,
  disableMobileStyles,
  ...rest
}) => {
  const isMobile = false;

  const defaultStyles = isMobile && !disableMobileStyles
    ? HEADINGS_STYLES_MOBILE[type]
    : HEADINGS_STYLES_DESKTOP[type];

  return (
    <Text
      as={type}
      {...defaultStyles}
      {...rest}
    >
      {title || children}
    </Text>
  );
};

export default Heading;

Heading.defaultProps = {
  disableMobileStyles: false,
};
