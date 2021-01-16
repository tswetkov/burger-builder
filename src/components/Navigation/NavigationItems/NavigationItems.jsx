// @flow

import React, { type Node } from 'react';
import { useTranslation } from 'react-i18next';

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

export const NavigationItems = ({ isAuth }: Props): Node => {
  const { t } = useTranslation();

  return (
    <NavigationItemsWrapper>
      <NavigationItem link="/" exact>
        {t('constructor')}
      </NavigationItem>
      {isAuth ? (
        <NavigationItem link="/orders">{t('orders')}</NavigationItem>
      ) : null}
      {!isAuth ? (
        <NavigationItem link="/signin">{t('login')}</NavigationItem>
      ) : (
        <NavigationItem link="/logout">{t('logout')}</NavigationItem>
      )}
    </NavigationItemsWrapper>
  );
};
