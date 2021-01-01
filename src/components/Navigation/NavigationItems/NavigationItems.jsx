// @flow

import React, { type Node } from 'react';

import styled from 'styled-components';
import { NavigationItem } from './NavigationItem';

const NavigationItemsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;

  @media (min-width: 500px) {
    flex-flow: row;
  }
`;

type Props = {
  isAuth: boolean,
};

export const NavigationItems = ({ isAuth }: Props): Node => (
  <NavigationItemsWrapper>
    <NavigationItem link="/" exact>
      Конструктор
    </NavigationItem>
    {isAuth ? <NavigationItem link="/orders">Заказы</NavigationItem> : null}
    {!isAuth ? (
      <NavigationItem link="/signin">Войти</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Выйти</NavigationItem>
    )}
  </NavigationItemsWrapper>
);
