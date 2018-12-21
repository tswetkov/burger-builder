import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../axios-orders";

import { fetchOrders } from "../../redux/actions";
import withErrorHandler from "../../hoc/Layout/WithErrorHandler/WithErrorHandler";

import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.handleFetchOrder(this.props.token, this.props.userId);
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ));
    }
    return <div>{orders}</div>;
  }
}

const mapState = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatch = dispatch => {
  return {
    handleFetchOrder: (token, userId) => dispatch(fetchOrders(token, userId))
  };
};

export default connect(
  mapState,
  mapDispatch
)(withErrorHandler(Orders, axios));
