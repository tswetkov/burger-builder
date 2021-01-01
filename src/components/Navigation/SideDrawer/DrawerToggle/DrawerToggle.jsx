// @flow

import React, { type Node } from 'react';

import styled from 'styled-components';

const DrawerToggleWrapper = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;

  @media (min-width: 500px) {
    display: none;
  }
`;

const DrawerToggleLine = styled.div`
  width: 90%;
  height: 3px;
  background-color: white;
`;

type Props = {
  onClick: () => void,
};

export const DrawerToggle = ({ onClick }: Props): Node => (
  <DrawerToggleWrapper onClick={onClick}>
    <DrawerToggleLine />
    <DrawerToggleLine />
    <DrawerToggleLine />
  </DrawerToggleWrapper>
);
