import React from 'react';

import {
  HeaderContent,
  HeaderWrapper,
} from './Header.styles';

import { HeaderProps } from './Header.d';

// utils
import { SPACING } from "~utils/styles/spacing";

// hooks
import { useWindowSize } from '~hooks/useWindowSize';
import { useScrollHandler } from "~hooks/useScrollHandler";

// components
import { Img } from "~components/common/Img";
import { Link } from "~components/common/Link";
import { Avatar } from "~components/common/Avatar";
import { FlexBox } from "~components/common/FlexBox";
import { Container } from "~components/common/Container";
import { Navbar } from "~layout/Header/components/Navbar";
import { MobileMenu } from "~layout/Header/components/MobileMenu";
import { LocaleSwitcher } from "~components/LocaleSwitcher";

const Header: React.FC<HeaderProps> = ({
  links,
}) => {

  const isMobile = useWindowSize();
  const scroll = useScrollHandler(10)

  return (
    <HeaderWrapper
        isHomePage={true}
        isScrolled={scroll}
    >
      <Container>
        <HeaderContent>
          <Link href={'/'}>
            <Img
                height={38}
                width={202}
                alt={'logo'}
                src={"/img/logo.png"}
            />
          </Link>
          <Navbar
                links={links}
                isMobile={isMobile}
            />
          <FlexBox alignItems={'center'}>
            <Avatar
                mr={SPACING.md}
                alt={'user name'}
                src={'/img/users/user.png'}
            />
            <Link
                type={'button'}
                mr={SPACING.md}
                name={"Sign in"}
                href={'/contact'}
                variant={'primary'}
            />
            <LocaleSwitcher />
            {isMobile && <MobileMenu/>}
          </FlexBox>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
