import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Burger } from '../../components/Burger';
import { BuildControls } from '../../components/Burger/BuildControls';

import {
  addIngredient,
  removeIngredient,
  initIngredients,
} from '../../redux/actions';

import { purchaseInit } from '../../redux/actions';
import { setAuthRedirectPath } from '../../redux/actions';
import { OrderSummaryModal } from '../../components/modals';

export const BurgerBuilder = ({ history }) => {
  const [purchasing, setPurchasing] = useState(false);

  const { ingredients, totalPrice, isAuthenticated } = useSelector((state) => ({
    ingredients: state.ingredients.ingredients,
    totalPrice: state.ingredients.totalPrice,
    error: state.ingredients.error,
    isAuthenticated: state.auth.token !== null,
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
    if (isAuthenticated) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath('/checkout');
      history.push('/signin');
    }
  }, [isAuthenticated, setPurchasing, onSetAuthRedirectPath, history]);

  const handleCloseModal = useCallback(() => setPurchasing(false), [
    setPurchasing,
  ]);

  const handleModalContinue = useCallback(() => {
    onInitPurchase();
    history.push('/checkout');
  }, [onInitPurchase]);

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
        isAuthenticated={isAuthenticated}
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
