// @flow

import React, { useState, useCallback, type Node, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Burger } from 'components/Burger';
import { BuildControls } from 'components/Burger/BuildControls';
import { OrderSummaryModal } from 'components/modals';

import {
  addIngredient,
  removeIngredient,
  resetIngredietns,
} from 'store/slices/ingredientsSlice';
import { setAuthRedirectPath } from 'store/slices/authSlice';
import { purchaseInit } from 'store/slices/orderSlice';

export const BurgerBuilder = (): Node => {
  const [purchasing, setPurchasing] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { ingredients, totalPrice, isAuth, purchased } = useSelector(
    (state) => ({
      ingredients: state.ingredients.ingredients,
      totalPrice: state.ingredients.totalPrice,
      error: state.ingredients.error,
      purchased: state.order.purchased,
      isAuth: state.auth.token !== null,
    }),
  );

  useEffect(() => {
    if (purchased) {
      dispatch(resetIngredietns());
    }
  }, [purchased]);

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
    (path) => dispatch(setAuthRedirectPath({ path })),
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
