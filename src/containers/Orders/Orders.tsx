import * as React from 'react';

import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from 'src/store/actions';

import { Order } from 'src/components/Order';
import { Spinner } from 'src/components/UI';
import { RootState } from 'src/store';

export const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading, token, userId } = useSelector(
    (state: RootState) => ({
      orders: state.order.orders,
      loading: state.order.loading,
      token: state.auth.token,
      userId: state.auth.userId,
    }),
  );

  const handleFetchOrder = useCallback(
    (requestToken, id) => {
      dispatch(fetchOrders(requestToken, id));
    },
    [dispatch],
  );

  useEffect(() => {
    handleFetchOrder(token, userId);
  }, [handleFetchOrder, token, userId]);
  if (loading) {
    return <Spinner />;
  }

  return orders.map((order) => (
    <Order key={order.id} ingredients={order.ingredients} price={order.price} />
  ));
};
