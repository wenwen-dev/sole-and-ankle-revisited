/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <ButtonWrapper>
        <UnstyledButton onClick={onDismiss}>
          <Icon id='close'/>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </UnstyledButton>
      </ButtonWrapper>
      <Nav>
        <a href="/sale">Sale</a>
        <a href="/new">New&nbsp;Releases</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/collections">Collections</a>
      </Nav>
      <Footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 90vw;
  border: 1px solid deeppink;
  background-color: ${COLORS.white};
  padding: 26px 16px 32px 32px;
  z-index: 1;
`;

const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  gap: 22px;
  flex-direction: column;
  text-transform: uppercase;
  & a {
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-size: ${18 / 16}rem;
    font-weight: ${WEIGHTS.medium};

    &:visited {
      color: ${COLORS.secondary};
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  flex: 1;

  & a {
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-size: ${14 / 16}rem;
    font-weight: ${WEIGHTS.normal};
  }
`;

export default MobileMenu;
