import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../redux/actions';

import { Order } from '../../components/Order';
import { Spinner } from '../../components/UI';

export const Orders = (): Node => {
  const dispatch = useDispatch();
  const { orders, loading, token, userId } = useSelector((state): Node => ({
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  }));

  const handleFetchOrder = useCallback(
    (token, userId): Node => dispatch(fetchOrders(token, userId)),
    [dispatch],
  );

  useEffect((): Node => {
    handleFetchOrder(token, userId);
  }, [handleFetchOrder, token, userId]);

  let ordersResult = <Spinner />;
  if (!loading) {
    ordersResult = orders.map((order): Node => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}
      />
    ));
  }

  return <div>{ordersResult}</div>;
};
