import { useCallback } from 'react';
import styled from 'astroturf';
import { useTranslation } from 'react-i18next';

import { BurgerIngredient, Ingredient } from './BurgerIngredient';

const BurgerWrapper = styled.div`
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
    margin: auto;
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
  ingredients: Ingredient[];
};

export const Burger = ({ ingredients }: Props) => {
  const { t } = useTranslation();

  const burgerBody = useCallback(() => {
    const transformedIngredients = ingredients.map((ingredient, index) => (
      <BurgerIngredient key={`${ingredient}/${index}`} type={ingredient} />
    ));

    if (transformedIngredients.length === 0) {
      return <p>{t('addIngredients')}</p>;
    }

    return transformedIngredients;
  }, [ingredients]);

  return (
    <BurgerWrapper>
      <BurgerContent>
        <BurgerIngredient type="bread-top" />
        {burgerBody()}
        <BurgerIngredient type="bread-bottom" />
      </BurgerContent>
    </BurgerWrapper>
  );
};
