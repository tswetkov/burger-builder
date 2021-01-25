import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from 'store/actions';

import { Order } from 'components/Order';
import { Spinner } from 'components/UI';

export const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading, token, userId } = useSelector((state) => ({
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  }));

  const handleFetchOrder = useCallback(
    (requestToken, id) => {
      dispatch(fetchOrders(requestToken, id));
    },
    [dispatch],
  );

  useEffect(() => {
    handleFetchOrder(token, userId);
  }, [handleFetchOrder, token, userId]);

  let ordersResult = <Spinner />;
  if (!loading) {
    ordersResult = orders.map((order) => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}
      />
    ));
  }

  return <div>{ordersResult}</div>;
};
