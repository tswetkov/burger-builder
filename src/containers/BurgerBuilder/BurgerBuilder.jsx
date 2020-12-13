import React, { Fragment, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Burger } from '../../components/Burger';
import { BuildControls } from '../../components/Burger/BuildControls';
import { Modal, Spinner } from '../../components/UI';
import { OrderSummary } from '../../components/Burger/OrderSummary';

import {
  addIngredient,
  removeIngredient,
  initIngredients,
} from '../../redux/actions';

import { purchaseInit } from '../../redux/actions';
import { setAuthRedirectPath } from '../../redux/actions';

export const BurgerBuilder = ({ history }) => {
  const [purchasing, setPurchasing] = useState(false);

  const { ingredients, totalPrice, error, isAuthenticated } = useSelector(
    (state) => ({
      ingredients: state.ingredients.ingredients,
      totalPrice: state.ingredients.totalPrice,
      error: state.ingredients.error,
      isAuthenticated: state.auth.token !== null,
    }),
  );

  const dispatch = useDispatch();
  const handleAddIngredient = useCallback(
    (ingredientName) => dispatch(addIngredient(ingredientName)),
    [dispatch],
  );
  const handleRemoveIngredient = useCallback(
    (ingredientName) => dispatch(removeIngredient(ingredientName)),
    [dispatch],
  );
  const onInitIngredients = useCallback(() => dispatch(initIngredients()), [
    dispatch,
  ]);
  const onInitPurchase = useCallback(() => dispatch(purchaseInit()), [
    dispatch,
  ]);
  const onSetAuthRedirectPath = useCallback(
    (path) => dispatch(setAuthRedirectPath(path)),
    [dispatch],
  );

  useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const handlePurchase = () => {
    if (isAuthenticated) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath('/checkout');
      history.push('/signin');
    }
  };

  const handleModalCancel = () => {
    setPurchasing(false);
  };

  const handleModalContinue = () => {
    onInitPurchase();
    history.push('/checkout');
  };

  const disabledInfo = {
    ...ingredients,
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0; // {salad: true, cheese: false, ...} and so one
  }

  /**================================
     *            Order Summary
     ==================================*/
  let orderSummary = null;

  /**================================
     *            Burger
     ==================================*/
  let burger = error ? <p>Не могу загрузить данные</p> : <Spinner />;
  if (ingredients) {
    burger = (
      <Fragment>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={handleAddIngredient}
          ingredientRemove={handleRemoveIngredient}
          disabled={disabledInfo}
          price={totalPrice}
          purchasable={updatePurchaseState(ingredients)}
          ordered={handlePurchase}
          isAuthenticated={isAuthenticated}
        />
      </Fragment>
    );

    /**================================
       *            Order Summary
       =================================*/
    orderSummary = (
      <OrderSummary
        ingredients={ingredients}
        modalClosed={handleModalCancel}
        modalContinue={handleModalContinue}
        price={totalPrice}
      />
    );
  }

  return (
    <Fragment>
      <Modal show={purchasing} modalClosed={handleModalCancel}>
        {orderSummary}
      </Modal>
      {burger}
    </Fragment>
  );
};
