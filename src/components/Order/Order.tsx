import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'astroturf';
import { Ingredient } from '../Burger/BurgerIngredient';

const OrderWrapper = styled.div`
  width: 80%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`;

type Props = {
  ingredients: Ingredient[];
  price: string;
};

export const Order = ({ ingredients, price }: Props) => {
  const { t } = useTranslation();
  const ingredientsArray = [];

  ingredients.forEach((ingredientName) => {
    ingredientsArray.push({
      name: ingredientName,
    });
  });

  const ingredientOutput = ingredientsArray.map((ing, index) => (
    <span
      key={`${ing.name}/${index}`}
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid lightgray',
        padding: '5px',
      }}
    >
      {ing.name}
    </span>
  ));

  return (
    <OrderWrapper>
      <p>
        {t('ingredients')}: {ingredientOutput}
      </p>
      <p>
        Цена: <strong>{Number.parseFloat(price).toFixed(2)} Р</strong>
      </p>
    </OrderWrapper>
  );
};
