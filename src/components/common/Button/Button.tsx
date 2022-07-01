import React from 'react';

import {
    ButtonWrapper,
} from './Button.styles';

import { ButtonD } from './Button.d';
import {
    isCenterIcon,
    isLeftIcon,
    isRightIcon
} from "./helpers";

// utils
import { SPACING } from "~utils/styles/spacing";

// components
import { Icon } from "~components/common/Icon";


const Button: React.FC<ButtonD> = ({
   size,
   name,
   variant,
   settings,
   onMouseEnter,
   onMouseLeave,
   children,
   ...rest
}) => {

    const iconName = settings?.icon?.name
    const iconSize = settings?.icon?.size
    const iconPosition = settings?.icon?.position

    return (
        <ButtonWrapper
            size={size}
            variant={variant}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
            {...rest}
        >
            {iconName && iconPosition && isLeftIcon(iconPosition)
                && <Icon size={iconSize} mr={SPACING.sm} name={iconName}/>
            }
            {iconName && iconPosition && isCenterIcon(iconPosition)
                && <Icon size={iconSize ?? 'lg'} name={iconName}/>
            }
            {name || children}
            {iconName && iconPosition && isRightIcon(iconPosition)
                && <Icon size={iconSize} ml={SPACING.sm} name={iconName}/>
            }
        </ButtonWrapper>
    )
}

export default Button;
