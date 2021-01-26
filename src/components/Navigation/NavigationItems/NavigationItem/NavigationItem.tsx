import * as React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'astroturf';

const NavigationItemWrapper = styled.li`
  display: block;
  margin: 10px 0;
  box-sizing: border-box;
  width: 100%;

  @media (min-width: 500px) {
    display: flex;
    align-items: center;
    margin: 0;
    width: auto;
    height: 100%;
  }
`;

const activeClassName = 'active';

const Link = styled(NavLink).attrs({
  activeClassName,
})`
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;

  &:hover,
  &:active,
  &.${activeClassName} {
    color: #40a4c8;
  }
  @media (min-width: 500px) {
    color: var(--app-color-white);
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;

    &:hover,
    &:active,
    &.${activeClassName} {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: var(--app-color-white);
    }
  }
`;

type Props = {
  children: any;
  link: string;
  exact?: boolean;
};

export const NavigationItem = ({ children, link, exact }: Props) => (
  <NavigationItemWrapper>
    <Link to={link} exact={exact} activeClassName={activeClassName}>
      {children}
    </Link>
  </NavigationItemWrapper>
);
