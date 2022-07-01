import {
  AsideWrapper,
} from './AsideRight.styles';

import {
    AsideRightD,
} from './AsideRight.d';

const AsideRight = ({
  isFixed,
  isVisible,
}: AsideRightD) => (
    <>
        {isVisible
            && <AsideWrapper
                isFixed={isFixed}
            />
        }
    </>
);

export default AsideRight;
