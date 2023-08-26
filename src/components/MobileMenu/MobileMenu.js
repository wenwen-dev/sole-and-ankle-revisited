/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, WEIGHTS } from '../../constants';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label='Menu'>
        <CloseButton onClick={onDismiss}>
          <Icon id='close' />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href='/terms'>Terms and Conditions</FooterLink>
          <FooterLink href='/privacy'>Privacy Policy</FooterLink>
          <FooterLink href='/contact'>Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsla(220, 5%, 40%, 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background-color: ${COLORS.white};
  /* why height will be 100% even if not setting it? */
  width: 300px;
  height: 100%;
  padding: 26px 16px 32px 32px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 9px;
  flex: 1;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.normal};
`;

export default MobileMenu;
