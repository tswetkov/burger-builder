import React, { useMemo } from 'react';
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

const LanguageChange = styled.span`
  color: #7b7575;
  margin-right: auto;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;

  @media (min-width: 500px) {
    margin-right: 20px;
    color: #fff;
  }
`;

type Props = {
  isAuth: boolean;
};

const ToggleLanguagle = () => {
  const { i18n } = useTranslation();

  const label = useMemo(() => {
    const lan = localStorage.getItem('lan');
    return lan === 'ru' ? 'en' : 'ru';
  }, [i18n.language]);

  const handleLanguageChange = () => {
    try {
      i18n.changeLanguage(label);
      localStorage.setItem('lan', i18n.language);
    } catch (error) {
      throw new Error('Error during change language');
    }
  };

  return (
    <LanguageChange role="button" tabIndex="0" onClick={handleLanguageChange}>
      {label}
    </LanguageChange>
  );
};

export const NavigationItems = ({ isAuth }: Props) => {
  const { t } = useTranslation();

  return (
    <NavigationItemsWrapper>
      <ToggleLanguagle />
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
