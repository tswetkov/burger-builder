// @flow

import React, { type Node } from 'react';
import styled from 'styled-components';

import { BurgerIngredient } from './BurgerIngredient';
import type { Ingredient } from './BurgerIngredient';

const BurgerWrapper = styled.div`
  margin: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 4rem 1.5rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 500px;
  }
`;

const BurgerContent = styled.div`
  margin-top: auto;
`;
type Props = {
  ingredients: Ingredient[],
};

export const Burger = ({ ingredients }: Props): Node => {
  let transformedIngredients = ingredients.map((ingredient, index): Node => (
    <BurgerIngredient key={`${ingredient}/${index}`} type={ingredient} />
  ));

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Пожалуйста, добавьте ингридиенты</p>;
  }

  return (
    <BurgerWrapper>
      <BurgerContent>
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </BurgerContent>
    </BurgerWrapper>
  );
};
