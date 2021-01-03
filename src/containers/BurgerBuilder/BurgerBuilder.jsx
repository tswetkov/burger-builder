// @flow

import React, { useState, useCallback, type Node } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Burger } from 'components/Burger';
import { BuildControls } from 'components/Burger/BuildControls';
import { OrderSummaryModal } from 'components/modals';

import {
  setAuthRedirectPath,
  purchaseInit,
  addIngredient,
  removeIngredient,
} from 'store/actions';

export const BurgerBuilder = (): Node => {
  const [purchasing, setPurchasing] = useState(false);

  const history = useHistory();
  const { ingredients, totalPrice, isAuth } = useSelector((state) => ({
    ingredients: state.ingredients.ingredients,
    totalPrice: state.ingredients.totalPrice,
    error: state.ingredients.error,
    isAuth: state.auth.token !== null,
  }));

  const dispatch = useDispatch();
  const handleAddIngredient = useCallback(
    (ingredientName) => dispatch(addIngredient(ingredientName)),
    [dispatch],
  );

  const handleRemoveIngredient = useCallback(
    (ingredientName) => dispatch(removeIngredient(ingredientName)),
    [dispatch],
  );

  const onInitPurchase = useCallback(() => dispatch(purchaseInit()), [
    dispatch,
  ]);

  const onSetAuthRedirectPath = useCallback(
    (path) => dispatch(setAuthRedirectPath(path)),
    [dispatch],
  );

  const handlePurchase = useCallback(() => {
    if (isAuth) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath('/checkout');
      history.push('/signin');
    }
  }, [isAuth, setPurchasing, onSetAuthRedirectPath, history]);

  const handleCloseModal = useCallback(() => setPurchasing(false), [
    setPurchasing,
  ]);

  const handleModalContinue = useCallback(() => {
    onInitPurchase();
    history.push(`/checkout#${btoa(JSON.stringify(ingredients))}`);
  }, [onInitPurchase, ingredients]);

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={handleAddIngredient}
        ingredientRemove={handleRemoveIngredient}
        disabled={ingredients}
        price={totalPrice}
        purchasable={ingredients.length > 0}
        ordered={handlePurchase}
        isAuth={isAuth}
      />

      {purchasing && (
        <OrderSummaryModal
          totalPrice={totalPrice}
          ingredients={ingredients}
          handleCloseModal={handleCloseModal}
          handleModalContinue={handleModalContinue}
        />
      )}
    </>
  );
};
