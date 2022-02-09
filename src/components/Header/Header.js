import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <Side>
          <MobileNav>
            <UnstyledButton>
              <Icon id="shopping-bag" strokeWidth={2} />
              <VisuallyHidden>Cart</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="search" strokeWidth={2} />
              <VisuallyHidden>Search</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" strokeWidth={2} />
              <VisuallyHidden>Open Menu</VisuallyHidden>
            </UnstyledButton>
          </MobileNav>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: auto;
  border-bottom: 1px solid var(--color-gray-300);
  @media ${QUERIES.phoneAndUnder} {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media ${QUERIES.tabletAndUnder} {
    border-top: 4px solid var(--color-gray-900);
    align-items: center;
    justify-content: space-between;
  }
  overflow: auto;
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8.1vw - 4rem, 3rem);
  margin: 0px 48px;
  @media ${QUERIES.tabletAndUnder} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  align-self: baseline;
  @media ${QUERIES.tabletAndUnder} {
    display: flex;
    align-items: baseline;
    gap: 2rem;
    justify-content: flex-end;
    /* 32px */
  }
  @media ${QUERIES.phoneAndUnder} {
    gap: 1rem;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
