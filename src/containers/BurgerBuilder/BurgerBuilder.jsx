import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/Layout/WithErrorHandler/WithErrorHandler";
import { addIngredient, removeIngredient } from "../../redux/actions/ingredientsActions";

const INGREDIENT_PRICES = {
  salad: 30,
  cheese: 20,
  meat: 40,
  bacon: 25
};

export class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    // axios
    //   .get("/ingredients.json")
    //   .then(response => {
    //     this.setState({ ingredients: response.data });
    //   })
    //   .catch(error => {
    //     this.setState({ error: true });
    //   });
  }

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  handleAddIngredient = type => {
    const ouldCount = this.props.ingredients[type];
    const updatedCount = ouldCount + 1;
    const updatedIngredients = { ...this.props.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  handleRemoveIngredient = type => {
    const ouldCount = this.props.ingredients[type];
    if (ouldCount <= 0) {
      return null;
    }
    const updatedCount = ouldCount - 1;
    const updatedIngredients = { ...this.props.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  handlePurchase = () => {
    this.setState({ purchasing: true });
  };

  handleModalCancel = () => {
    this.setState({ purchasing: false });
  };

  handleModalContinue = () => {
    const queryParams = [];

    for (let item in this.props.ingredients) {
      queryParams.push(
        encodeURIComponent(item) + "=" + encodeURIComponent(this.props.ingredients[item])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
    // alert("С покупкой!");
  };

  render() {
    const disabledInfo = {
      ...this.props.ingredients
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
    let burger = this.state.error ? <p>Не могу загрузить данные</p> : <Spinner />;
    if (this.props.ingredients) {
      burger = (
        <Fragment>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            ingredientAdded={this.props.addIngredient}
            ingredientRemove={this.props.removeIngredient}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.handlePurchase}
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
          price={this.state.totalPrice}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.handleModalCancel}>
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}

const mapState = state => {
  return {
    ingredients: state.ingredients.ingredients
  };
};

const mapDispatch = dispatch => {
  return {
    addIngredient: ingredientName => dispatch(addIngredient(ingredientName)),
    removeIngredient: ingredientName => dispatch(removeIngredient(ingredientName))
  };
};

export default connect(
  mapState,
  mapDispatch
)(withErrorHandler(BurgerBuilder, axios));
