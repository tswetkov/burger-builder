import React from 'react';

import { Logo } from '../../Logo';
import { NavigationItems } from '../NavigationItems';
import { Backdrop } from '../../UI';

import styled from 'styled-components';

const SideDrawerWrapper = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: #fff;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;

  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0);' : 'translateX(-100%);'};

  @media (min-width: 500px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  height: 11%;
  margin-bottom: 32px;
`;

export const SideDrawer = ({ closed, open }) => {
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <SideDrawerWrapper onClick={closed} isOpen={open}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <nav>
          <NavigationItems />
        </nav>
      </SideDrawerWrapper>
    </>
  );
};
