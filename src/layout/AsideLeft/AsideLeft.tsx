import { AsideLeftD } from './AsideLeft.d';
import { useWindowSize } from '~hooks/useWindowSize';

import {
  AsideWrapper,
} from './AsideLeft.styles';

const AsideLeft = ({
  isFixed,
  isVisible,
}: AsideLeftD) => {
  const isMobile = useWindowSize();

  return (
    <>
      {isVisible
          && <AsideWrapper
            isFixed={isFixed}
            isMobile={isMobile}
            isVisible={isVisible}
          />
      }
    </>
  );
};

export default AsideLeft;
