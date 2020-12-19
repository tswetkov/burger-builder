import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import styled from 'styled-components'

const LogoWrapper = styled.div`
  background-color: #fff;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Image = styled.img`
  height: 100%;
`;

export const Logo = () => {
  return (
    <LogoWrapper>
      <Image src={burgerLogo} alt="MyBurger" />
    </LogoWrapper>
  );
};
