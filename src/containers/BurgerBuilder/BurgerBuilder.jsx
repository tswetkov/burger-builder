import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Burger } from '../../components/Burger';
import { BuildControls } from '../../components/Burger/BuildControls';
import { Modal, Spinner } from '../../components/UI';
import { OrderSummary } from '../../components/Burger/OrderSummary';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/Layout/WithErrorHandler/WithErrorHandler';
import {
  addIngredient,
  removeIngredient,
  initIngredients,
} from '../../redux/actions';

import { purchaseInit } from '../../redux/actions';
import { setAuthRedirectPath } from '../../redux/actions';

export class BurgerBuilderComponent extends Component {
  state = {
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  handlePurchase = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      this.props.onSetAuthRedirectPath('/checkout');
      this.props.history.push('/auth');
    }
  };

  handleModalCancel = () => {
    this.setState({ purchasing: false });
  };

  handleModalContinue = () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo = {
      ...this.props.ingredients,
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
    let burger = this.props.error ? (
      <p>Не могу загрузить данные</p>
    ) : (
      <Spinner />
    );
    if (this.props.ingredients) {
      burger = (
        <Fragment>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            ingredientAdded={this.props.addIngredient}
            ingredientRemove={this.props.removeIngredient}
            disabled={disabledInfo}
            price={this.props.totalPrice}
            purchasable={this.updatePurchaseState(this.props.ingredients)}
            ordered={this.handlePurchase}
            isAuthenticated={this.props.isAuthenticated}
          />
        </Fragment>
      );

      /**================================
     *            Order Summary
     =================================*/
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          modalClosed={this.handleModalCancel}
          modalContinue={this.handleModalContinue}
          price={this.props.totalPrice}
        />
      );
    }

    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.handleModalCancel}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}

const mapState = (state) => {
  return {
    ingredients: state.ingredients.ingredients,
    totalPrice: state.ingredients.totalPrice,
    error: state.ingredients.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addIngredient: (ingredientName) => dispatch(addIngredient(ingredientName)),
    removeIngredient: (ingredientName) =>
      dispatch(removeIngredient(ingredientName)),
    onInitIngredients: () => dispatch(initIngredients()),
    onInitPurchase: () => dispatch(purchaseInit()),
    onSetAuthRedirectPath: (path) => dispatch(setAuthRedirectPath(path)),
  };
};

export const BurgerBuilder = connect(
  mapState,
  mapDispatch,
)(withErrorHandler(BurgerBuilderComponent, axios));
