/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, COLORS, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <ModalHeader>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" strokeWidth={2} />
          </CloseButton>
        </ModalHeader>
        <MobileNavMenus>
          <MobileNavLink href="/sale">Sale</MobileNavLink>
          <MobileNavLink href="/new">New&nbsp;Releases</MobileNavLink>
          <MobileNavLink href="/men">Men</MobileNavLink>
          <MobileNavLink href="/women">Women</MobileNavLink>
          <MobileNavLink href="/kids">Kids</MobileNavLink>
          <MobileNavLink href="/collections">Collections</MobileNavLink>
        </MobileNavMenus>
        <ModalFooter>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </ModalFooter>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(220, 5%, 40%, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(DialogContent)`
  background: white;
  border: 1px solid var(--color-gray-300);
  width: 100%;
  height: 100%;
  margin-left: 75px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalHeader = styled.footer`
  flex: 1;
`;

const ModalFooter = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`;

const FooterLink = styled.a`
  color: var(--color-gray-700);
  text-decoration: none;
`;

const CloseButton = styled.a`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const MobileNavMenus = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const MobileNavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default MobileMenu;
