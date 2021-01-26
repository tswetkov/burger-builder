import * as React from 'react';
import { useMemo } from 'react';

import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { BuildControl } from './BuildControl';
import { Ingredient } from '../BurgerIngredient';

const enable = keyframes`
  0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const BuildControlsWrapper = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  padding: 10px 0 30px;
`;

const OrderButton = styled.button`
  background-color: #dad735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;
  text-transform: uppercase;

  &:hover,
  &:active {
    background-color: #a0db41;
    border: 1px solid #966909;
    color: #966909;
  }

  &:disabled {
    background-color: #c7c6c6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  }

  &:not(:disabled) {
    animation: ${enable} 0.3s linear;
  }
`;
type Props = {
  ingredientAdded: (type: Ingredient) => void;
  ingredientRemove: (type: Ingredient) => void;
  disabled: string[];
  price: number;
  purchasable: boolean;
  ordered: () => void;
  isAuth: boolean;
};

export const BuildControls = ({
  ingredientAdded,
  ingredientRemove,
  disabled,
  price,
  purchasable,
  ordered,
  isAuth,
}: Props) => {
  const { t } = useTranslation();

  const controls: Array<{ label: string; type: Ingredient }> = useMemo(
    () => [
      { label: t('salad'), type: 'salad' },
      { label: t('bacon'), type: 'bacon' },
      { label: t('cheese'), type: 'cheese' },
      { label: t('meat'), type: 'meat' },
    ],
    [],
  );

  const label = useMemo(
    () => (isAuth ? 'authMainButton' : 'noAuthMainButton'),
    [isAuth],
  );

  return (
    <BuildControlsWrapper>
      <p>
        {t('currentPrice')}: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map((item) => (
        <BuildControl
          key={item.label}
          label={item.label}
          added={() => ingredientAdded(item.type)}
          removed={() => ingredientRemove(item.type)}
          disabled={!disabled.includes(item.type)}
        />
      ))}
      <OrderButton disabled={!purchasable} onClick={ordered}>
        {t(label)}
      </OrderButton>
    </BuildControlsWrapper>
  );
};
