import React from 'react';
import styled from 'styled-components'

import { BurgerIngredient } from './BurgerIngredient';

const BurgerWrapper = styled.div`
  width: 100%;
  height: 250px;
  margin: auto;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`;

export const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map((igKey) => {
      return [...Array(ingredients[igKey])].map((element, index) => {
        return <BurgerIngredient key={igKey + index} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Пожалуйста, добавьте ингридиенты</p>;
  }

  return (
    <BurgerWrapper>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </BurgerWrapper>
  );
};
